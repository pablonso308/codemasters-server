const Asignatura = require('../models/asignaturaModel');
const Alumno = require('../models/alumnoModel');
const Profesor = require('../models/profesorModel');

// Obtener todas las asignaturas
exports.getAllAsignaturas = async (req, res) => {
    try {
        const asignaturas = await Asignatura.find().populate('profesor alumnos');
        res.json(asignaturas);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Crear una nueva asignatura
exports.createAsignatura = async (req, res) => {
    try {
        const asignatura = new Asignatura(req.body);
        await asignatura.save();
        res.status(201).send(asignatura);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Actualizar una asignatura
exports.updateAsignatura = async (req, res) => {
    try {
        const asignatura = await Asignatura.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(asignatura);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Borrar una asignatura
exports.deleteAsignatura = async (req, res) => {
    try {
        await Asignatura.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtener detalle de una asignatura incluyendo profesor y alumnos
exports.getAsignaturaDetail = async (req, res) => {
    try {
        const asignatura = await Asignatura.findById(req.params.id).populate('profesor alumnos');
        if (!asignatura) {
            return res.status(404).send('Asignatura no encontrada');
        }
        res.json(asignatura);
    } catch (error) {
        res.status(500).send(error);
    }
};

const express = require('express');
const {
    getAllAsignaturas,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura,
    getAsignaturaDetail
} = require('../controllers/asignaturaController');
const router = express.Router();

router.get('/', getAllAsignaturas);
router.get('/:id', getAsignaturaDetail);
router.post('/', createAsignatura);
router.put('/:id', updateAsignatura);
router.delete('/:id', deleteAsignatura);

module.exports = router;
