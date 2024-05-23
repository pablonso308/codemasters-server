const Curso = require('../models/cursoModel');

exports.listarCursos = async (req, res) => {
    try {
        const cursos = await Curso.find({});
        res.json(cursos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.crearCurso = async (req, res) => {
    try {
        const nuevoCurso = new Curso(req.body);
        await nuevoCurso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.obtenerCurso = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) {
            return res.status(404).send();
        }
        res.json(curso);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.actualizarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!curso) {
            return res.status(404).send();
        }
        res.json(curso);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.eliminarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByIdAndDelete(req.params.id);
        if (!curso) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};
