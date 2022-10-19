import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/database.js';
import { Car } from '../../cars/models/Car.js';

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type_document: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_document: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_born: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Car, {
    foreignKey: 'fk_user',
    references: 'id',
});

Car.belongsTo(User, {
    foreignKey: 'fk_user',
    references: 'id',
});
