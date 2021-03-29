module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) {
            console.log('line 5 validate.js data has error');
            console.log(error.details[0].message);
            res.status(400).send(error.details[0].message);
            return;
        }
        next();
    }
}