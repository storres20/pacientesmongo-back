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
    fechacita: {
        required: true,
        type: Number
    },
    fechacita2: {
        required: true,
        type: String
    },
    hora: {
        required: true,
        type: String
    },
    categoria2: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Date', dataSchema)