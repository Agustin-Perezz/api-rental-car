import dateFormat from 'dateformat';
import { where } from 'sequelize';
import { Car } from '../../cars/models/Car.js';
import { User } from '../../users/models/User.js';
import { rentalBuilder } from '../builder/rentalBuilder.js';
import { Rental } from '../model/Rental.js';

export const getAllRentals = async () => {
    const allRental = await Rental.findAll();
    return allRental;
};

export const getRentalById = async (idRental) => {
    const rental = await Rental.findByPk(idRental);
    return rental;
};

// HACER UN BUILDER-PREVIEW-DATA, porque lo de new rental se lo pasamos tamb al update, todo esto par no repetir
export const newRental = async (data) => {
    await rentalBuilder(data);
    console.log('data: ', data);
    // await reservatedCar.update({ fk_user: ownerCar.id });
    // const newRental = await Rental.create({ ...data });
    // return newRental;
};

export const setNewDataRental = async (id, data) => {
    const rental = await Rental.findByPk(id);
    const updatedRental = await rental.update(data);
    return updatedRental;
};

export const removeRental = async (id, idCar) => {
    await Rental.destroy({ where: { id } });
};
