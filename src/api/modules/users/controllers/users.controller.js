import { Car } from '../../cars/models/Car.js';
import { User } from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        delete user.dataValues['id'];
        delete user.dataValues['fk_user'];
        delete user.dataValues['createdAt'];
        delete user.dataValues['updatedAt'];
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await User.create(data);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const user = await User.findByPk(id);
        const updatedUser = await user.update(data);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserTasks = async (req, res) => {
    try {
        const { id } = req.params;
        // alternativa
        // const task = await Car.findAll({ where: { fk_user: id } });
        const test = await User.findByPk(id, { include: Car });
        res.status(200).send(test);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
