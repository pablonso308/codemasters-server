const Alumno = require('../models/alumnoModel');

// Obtener todos los alumnos
exports.getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find().populate('asignaturas');
        res.json(alumnos);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Crear un nuevo alumno
exports.createAlumno = async (req, res) => {
    try {
        const alumno = new Alumno(req.body);
        await alumno.save();
        res.status(201).send(alumno);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Actualizar un alumno
exports.updateAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(alumno);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Borrar un alumno
exports.deleteAlumno = async (req, res) => {
    try {
        await Alumno.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

const express = require('express');
const { getAllAlumnos, createAlumno, updateAlumno, deleteAlumno } = require('../controllers/alumnoController');
const router = express.Router();

router.get('/', getAllAlumnos);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

module.exports = router;
