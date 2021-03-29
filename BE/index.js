const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/userRoute');
const questionRoutes = require('./routes/questionRoute');
const testRoutes = require('./routes/testRoute');
const db = require('./config/database');

const app = express();

//set env config path
dotenv.config({
    path: './config.env',
});

//connect to db
db.connect();

//static files
app.use(express.static(path.join(__dirname, '/shared')))

//set security http header
app.use(helmet());

//cors policy 
app.use(cors())

//body parser
app.use(express.json());

//routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/tests', testRoutes);

app.use('*', (req, res) => {
    res.status(400).send('Undefined route !');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listen at port ${port}`);
})