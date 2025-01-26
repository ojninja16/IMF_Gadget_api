const {PrismaClient} =require('@prisma/client')
const prisma=new PrismaClient();
prisma.$connect().then(() => {
    console.log('Prisma Client connected to the database');
    }).catch((err) => {
    console.error('Error connecting Prisma Client to the database:', err);
    });
module.exports=prisma;