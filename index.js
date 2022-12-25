require('dotenv').config();

const express = require('express'); // Server
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// Database connection - mongodb
mongoose.set("strictQuery", false);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// ****

// Server
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})