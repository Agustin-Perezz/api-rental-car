import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/database.js';
import { Car } from '../../cars/models/Car.js';
import { User } from '../../users/models/User.js';

export const Rental = sequelize.define('rental', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fk_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fk_car: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date_start: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

User.hasOne(Rental, { foreignKey: 'fk_user' });
Rental.belongsTo(User, { foreignKey: 'fk_user' });

Car.hasOne(Rental, { foreignKey: 'fk_car' });
Rental.belongsTo(Car, { foreignKey: 'fk_car' });
