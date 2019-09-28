// init express instance
const express = require("express");
const app = express();
const createError = require("http-errors");
 
const cors = require("cors");

const mongoose = require("mongoose");       // mongodb connection client
const helmet = require("helmet");           
const compression = require("compression");  
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT;



app.set('port', port);
app.options('/', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(helmet());


let whitelist = new RegExp(process.env.WHITELIST_DOMAINS);

// not using whitelist at the moment
let corsOptions = {
    origin: (origin, callback) => {
        origin: true
        callback(null, true)
    },
    credentials: true
}

app.get('/', cors(corsOptions), (req, res, next) => {
    res.status(200).send("<h1>This route is enabled for CORS</h1>");
})

app.use(cors(corsOptions));

app.use((req, res, next) => {
    next(createError(404));
})

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})