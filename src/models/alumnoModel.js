const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: String,
    asignaturas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura' }]
});

alumnoSchema.methods.findAsignaturas = function () {
    alumnoSchema.methods.findAsignaturas = function (cb) {
        return this.model('Alumno').find({ _id: this._id })
            .populate('asignaturas')
            .exec(cb);
    };
};

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
