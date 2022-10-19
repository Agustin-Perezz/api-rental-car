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
        type: DataTypes.STRING,
        allowNull: false,
    },
    kilometers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    air_conditioning: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
    },
    passengers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type_tranmision: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fk_user: {
        type: DataTypes.INTEGER,
    },
});
