import { Car } from '../models/Car.js';

/*
    brand
    model
    year
    kms
    color
    aire acondionado
    pasajeros
    manual/automatico
*/

export const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByPk(id);
        res.status(200).send(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCars = async (req, res) => {
    try {
        const allCars = await Car.findAll();
        res.status(200).send(allCars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCar = async (req, res) => {
    try {
        const data = req.body;
        const newCar = await Car.bulkCreate(data);
        res.status(201).send(newCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const car = await Car.findByPk(id);
        const resp = await car.update(data);
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        await Car.destroy({ where: { id } });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
