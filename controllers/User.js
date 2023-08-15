const bcryprt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken')

exports.Register = async(req,res,next)=>{
    try {
        const {name,email,picturePath,password} = req.body 
        const salt = await bcryprt.genSalt()
        const hashPassword = await bcryprt.hash(password,salt)
        const user = new User({name,email,picturePath,password:hashPassword})
        const saveUser = await user.save()
        return res.status(201).json({user: saveUser})
    } catch (err) {
        next(err)
    }
}

exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const isUser = await User.findOne({ email });

        if (!isUser) {
            return res.status(404).json("User not found");
        }

        const isMatched = await bcryprt.compare(password, isUser.password);
        if (!isMatched) {
            return res.status(401).json("Wrong credentials");
        }

        const token = jwt.sign({ id: isUser._id }, process.env.SECRET_KEY);
        if (isUser) {
            const { password, ...userRes } = isUser._doc;
            res.cookie('token', token, { httpOnly: true }); // Set the cookie
            return res.status(201).json({ user: userRes });
        }
    } catch (err) {
        next(err);
    }
};
