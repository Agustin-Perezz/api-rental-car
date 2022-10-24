import {
    getAllRentals,
    getRentalById,
    newRental,
    removeRental,
    setNewDataRental,
} from '../repository/rentalRepository.js';

export const getRental = async (req, res) => {
    try {
        const { id } = req.params;
        const rental = await getRentalById(id);
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRentals = async (req, res) => {
    try {
        const allRentals = await getAllRentals();
        res.status(200).send(allRentals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRental = async (req, res) => {
    try {
        const data = req.body;
        const rental = await newRental(data);
        res.status(201).send(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateRental = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedRental = await setNewDataRental(id, data);
        res.status(200).send(updatedRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRental = async (req, res) => {
    try {
        const { id } = req.params;
        await removeRental(id);
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
