import {
    add,
    update,
    deleteById,
    getAll,
    getById,
} from '../repository/carRepository.js';

export const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await getById(id);
        res.status(200).send(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCars = async (req, res) => {
    try {
        const allCars = await getAll();
        res.status(200).send(allCars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCar = async (req, res) => {
    try {
        const data = req.body;
        const newCar = await add(data);
        res.status(201).send(newCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedCar = await update(id, data);
        res.status(200).send(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteById(id);
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
