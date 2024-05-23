const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: String,
    asignaturas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura' }]
});

alumnoSchema.methods.findAsignaturas = function () {
    // Implementar la lógica para filtrar asignaturas específicas
};

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
