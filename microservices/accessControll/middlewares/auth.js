const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY


exports.verifyToken = async (req, res, next) => {

    const header = req.headers[`authorization`]
    console.log(req.headers)
    const token = header.split(" ")[1]
    console.log(token)
    if (!token) {
        return res.status(404).json({ message: "No token Found" })
    }
    else {
        jwt.verify(token, key, (err, user) => {
            if (err) {
                return res.status(400).json({ message: "Invalid Token" })
            }
            else {
                console.log(user.id);
                console.log(user.role)
                req.id = user.id
                req.role = user.role
                next();
            }
        });

    }

};