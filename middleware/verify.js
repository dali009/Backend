const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies && req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                console.log('Token verification error:', err);
                return res.status(401).json({ message: 'Token verification failed', error: err.message });
            }

            console.log('Token verification successful:', user);
            req.user = user;
            next();
        });
    } catch (err) {
        console.log('Middleware error:', err);
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};
