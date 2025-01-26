const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const gadgetRoutes = require('./routes/gadgetRoutes');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');
const prisma = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/gadgets', gadgetRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const shutdown = async () => {
    console.log('Shutting down gracefully...');
    try {
        await prisma.$disconnect(); // Disconnect Prisma Client
        console.log('Prisma disconnected.');
        server.close(() => {
        console.log('HTTP server closed.');
        process.exit(0); 
        });
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1); 
    }
    };

  process.on('SIGINT', shutdown); 
  process.on('SIGTERM', shutdown);