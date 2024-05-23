const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    }
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;
