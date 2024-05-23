
const Curso = require('../models/curso'); // Importar el modelo Curso

// Listar todos los cursos
exports.listarCursos = async (req, res) => {
    try {
        const cursos = await Curso.find({});
        res.json(cursos);
    } catch (error) {
        res.status(500).send({ error: 'Error al listar los cursos', details: error });
    }
};

// Crear un nuevo curso
exports.crearCurso = async (req, res) => {
    try {
        const nuevoCurso = new Curso(req.body);
        await nuevoCurso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(400).send({ error: 'Error al crear el curso', details: error });
    }
};

// Obtener un curso por su ID
exports.obtenerCurso = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) {
            return res.status(404).send({ error: 'Curso no encontrado' });
        }
        res.json(curso);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener el curso', details: error });
    }
};

// Eliminar un curso por su ID
exports.eliminarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByIdAndDelete(req.params.id);
        if (!curso) {
            return res.status(404).send({ error: 'Curso no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: 'Error al eliminar el curso', details: error });
    }
};

// Actualizar un curso por su ID
exports.actualizarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!curso) {
            return res.status(404).send({ error: 'Curso no encontrado' });
        }
        res.json(curso);
    } catch (error) {
        res.status(400).send({ error: 'Error al actualizar el curso', details: error });
    }
};
