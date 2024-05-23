const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    nombre: String,
    asignaturas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura' }]
});

profesorSchema.methods.findAsignaturas = function () {
    profesorSchema.methods.findAsignaturas = function (cb) {
        return this.model('Profesor').find({ _id: this._id })
            .populate('asignaturas')
            .exec(cb);
    };
};

const Profesor = mongoose.model('Profesor', profesorSchema);

module.exports = Profesor;