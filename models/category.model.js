const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Categorie', dataSchema)