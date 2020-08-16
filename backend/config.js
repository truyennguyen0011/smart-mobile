import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/smartmobile',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PORT: process.env.PORT || 5000,
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
}