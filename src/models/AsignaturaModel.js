const mongoose = require('mongoose');

const asignaturaSchema = new mongoose.Schema({
    nombre: String,
    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alumno' }],
    profesores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' }]
});

asignaturaSchema.methods.findAlumnos = function () {
    asignaturaSchema.methods.findAlumnos = function (cb) {
        return this.model('Asignatura').find({ _id: this._id })
            .populate('alumnos')
            .exec(cb);
    };
};

asignaturaSchema.methods.findProfesores = function () {
       asignaturaSchema.methods.findProfesores = function (cb) {
            return this.model('Asignatura').find({ _id: this._id })
                .populate('profesores')
                .exec(cb);
        };
};

const Asignatura = mongoose.model('Asignatura', asignaturaSchema);

module.exports = Asignatura;