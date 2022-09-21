import { Rental } from '../model/Rental.js';

export const getRental = async (req, res) => {
    try {
        const { id } = req.params;
        const rental = await Rental.findByPk(id);
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRentals = async (req, res) => {
    try {
        const allRental = await Rental.findAll();
        res.status(200).send(allRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRental = async (req, res) => {
    try {
        const data = req.body;
        const newRental = await Rental.create({ ...data });
        res.status(201).send(newRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateRental = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const rental = await Rental.findByPk(id);
        const updatedRental = await rental.update(data);
        res.status(200).send(updatedRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRental = async (req, res) => {
    try {
        const { id } = req.params;
        await Rental.destroy({ where: { id } });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
