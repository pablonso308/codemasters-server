const Profesor = require('../models/profesorModel');

// Obtener todos los profesores
exports.getAllProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find().populate('asignaturas');
        res.json(profesores);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Crear un nuevo profesor
exports.createProfesor = async (req, res) => {
    try {
        const profesor = new Profesor(req.body);
        await profesor.save();
        res.status(201).send(profesor);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Actualizar un profesor
exports.updateProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(profesor);
    } catch (error) {
        res.status(400).send(error);
    }
};
const express = require('express');
const {
    getAllProfesores,
    createProfesor,
    updateProfesor,
    deleteProfesor
} = require('../controllers/profesorController');
const router = express.Router();

router.get('/', getAllProfesores);
router.post('/', createProfesor);
router.put('/:id', updateProfesor);
router.delete('/:id', deleteProfesor);

module.exports = router;


// Borrar un profesor
exports.deleteProfesor = async (req, res) => {
    try {
        await Profesor.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};
