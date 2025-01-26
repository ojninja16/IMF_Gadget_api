const verifyToken = require('../utils/verifyToken');

const auth = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }   
    try {
        const decoded = verifyToken(token);
        if (roles.length && !roles.includes(decoded.role)) 
        {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }
        req.user = decoded;
        next();
        } catch (error) 
        {
        res.status(400).json({ message: 'Invalid token.' });
        }
    };
};

module.exports = auth;