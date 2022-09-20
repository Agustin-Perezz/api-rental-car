import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.ROOT,
    process.env.DATABASE_PASSWORD,
    { 
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    }
);