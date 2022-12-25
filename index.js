require('dotenv').config();

const express = require('express'); // Server
const cors = require("cors");

const products = require('./routes/product.routes');
const login = require('./routes/login.routes');
const categories = require('./routes/category.routes');
const dates = require('./routes/date.routes');

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;


// Database connection - mongodb
mongoose.set("strictQuery", false);

mongoose.connect(mongoString, { dbName: "pacientes" });
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

// Cors
var corsOptions = {
    //origin: "http://localhost:3000" //frontend
    origin: "https://pacientes20.netlify.app" //frontend
};

app.use(cors(corsOptions));

// simple route
app.get("/", async (req, res) => {
    res.json({ message: "Welcome to Back-End application." });
});

// Routes
app.use('/api/products', products)
app.use('/api/login', login)
app.use('/api/categories', categories)
app.use('/api/dates', dates)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})