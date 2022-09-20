import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/database.js';

export const Car = sequelize.define('cars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kilometers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    air_conditioning: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    passengers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type_tranmision: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fk_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
