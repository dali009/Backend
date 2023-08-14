const jwt = require('jsonwebtoken')

exports.verifiyToken = async(req,res,next)=>{
    try {
        const token = req.cookie.token
        if(!token) return res.status(401).json({message: 'Unauthorized'})
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                return res.status(401).json({ message: 'Token verification failed', error: err.message });
            }
            return res.json(user)
            req.user = user
        })
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}