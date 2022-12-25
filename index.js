require('dotenv').config();

const express = require('express'); // Server
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;


// Database connection - mongodb
mongoose.set("strictQuery", false);

mongoose.connect(mongoString, { dbName: "prueba2" });
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

// simple route
app.get("/", async (req, res) => {
  res.json({ message: "Welcome to Back-End application." });
});

// Routes
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})