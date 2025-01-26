const bcrypt = require('bcryptjs');
const prisma = require('../config/db');
const generateToken = require('../utils/genToken');

const registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: { username, password: hashedPassword, role },
        });
    res.status(201).json({ id: user.id, username: user.username });
    } catch (error) {
    res.status(400).json({ message: 'User registration failed.' });
    next(error); 
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials.' });
        }

    const token = generateToken(user.id, user.role);
    res.json({ token });
    } catch (error) {
    res.status(500).json({ message: 'Login failed.' });
    next(error); 
    }
};

module.exports = { registerUser, loginUser };