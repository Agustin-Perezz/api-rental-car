import { Car } from '../models/Car.js';

export const getAll = async () => {
    const allCars = await Car.findAll();
    return allCars;
};

export const getById = async (idCar) => {
    const carInstance = await Car.findByPk(idCar, {
        attributes: { exclude: ['id', 'fk_user', 'createdAt', 'updatedAt'] },
    });
    if (!carInstance) {
        throw new Error(
            `The car whit id ${idCar} not exist, maybe te car has been wiped`
        );
    }
    return carInstance;
};

export const add = async (data) => {
    const newCar = await Car.create({ ...data });
    return newCar;
};

export const update = async (idCar, data) => {
    const car = await Car.findByPk(idCar);
    if (!car) {
        throw new Error(`The char whit id ${idCar} not exist`);
    }
    const carUpdated = await car.update(data);
    return carUpdated;
};

export const deleteById = async (id) => {
    await Car.destroy({ where: { id } });
};
