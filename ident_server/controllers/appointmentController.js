const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const cron = require('node-cron');
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.IDENT_EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET ,
      refreshToken: process.emitWarning.REFRESH_TOKEN
    }
  });

  return transporter;
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

exports.createAppointment = async(req, res, next)=>{
  let {minute, day, month, year, hour} = req.body;
  let date = `${day}/${month}/${year} at ${hour}:${minute}`
  let emailMessage = 
`Dear ${req.body.name},

We look forward to welcoming you for your ${req.body.service} service on ${date}. 
As always, please let us know if there is anything more we can do for you. 
You may call us at ${process.env.IDENT_PHONE} with any questions or special requests.
  
Warm regards,
  
iDent`
  cron.schedule(`${minute} ${hour} ${day} ${month} *`, async () => {
    await sendEmail({
      subject: "iDent - appoinment reminder.",
      text: emailMessage,
      to: req.body.email,
      from : process.env.IDENT_EMAIL
    }).then().catch(err);
  });
  res.send('finish');
}