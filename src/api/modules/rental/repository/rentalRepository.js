import { sequelize } from '../../../database/database.js';
import { Car } from '../../cars/models/Car.js';
import { User } from '../../users/models/User.js';
import { Rental } from '../model/Rental.js';

export const getAllRentals = async () => {
    const allRental = await Rental.findAll({
        attributes: {
            include: [
                [
                    sequelize.fn(
                        'DATE_FORMAT',
                        sequelize.col('date_start'),
                        '%d-%m-%Y %H:%i'
                    ),
                    'date_start_format',
                ],
                [
                    sequelize.fn(
                        'DATE_FORMAT',
                        sequelize.col('date_end'),
                        '%d-%m-%Y %H:%i'
                    ),
                    'date_end_format',
                ],
            ],
        },
    });
    return allRental;
};

export const getRentalById = async (idRental) => {
    const rental = await Rental.findByPk(idRental, {
        attributes: {
            // exclude: ['createdAt', 'updatedAt'],
            include: [
                [
                    sequelize.fn(
                        'DATE_FORMAT',
                        sequelize.col('date_start'),
                        '%d-%m-%Y %H:%i'
                    ),
                    'date_start_format',
                ],
                [
                    sequelize.fn(
                        'DATE_FORMAT',
                        sequelize.col('date_end'),
                        '%d-%m-%Y %H:%i'
                    ),
                    'date_end_format',
                ],
            ],
        },
    });
    return rental;
};

export const newRental = async (data) => {
    const ownerCar = await User.findByPk(data.fk_user);
    const reservatedCar = await Car.findByPk(data.fk_car);
    data.brand_car = reservatedCar.brand;
    data.model_car = reservatedCar.model;
    data.unit_price = reservatedCar.unit_price;
    data.total_price = reservatedCar.unit_price * 10;
    data.username = ownerCar.name;
    data.email = ownerCar.email;
    const newRental = await Rental.create({ ...data });
    return newRental;
};

export const setNewDataRental = async (id, data) => {
    const rental = await Rental.findByPk(id);
    const updatedRental = await rental.update(data);
    return updatedRental;
};

export const removeRental = async (id) => {
    await Rental.destroy({ where: { id } });
};
