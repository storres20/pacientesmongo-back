const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    dni: {
        required: true,
        type: String
    },
    fecha: {
        required: true,
        type: Number
    },
    fecha2: {
        required: true,
        type: String
    },
    tipo: {
        required: true,
        type: String
    },
    categoria: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Product', dataSchema)