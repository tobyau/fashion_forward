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

const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// Passport config
require('./config/passport.js')(passport);

// server port
const port = process.env.SERVER_PORT;
    
app.set('port', port);
app.options('/', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(helmet());

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });


let whitelist = new RegExp(process.env.WHITELIST_DOMAINS);

// not using whitelist at the moment
let corsOptions = {
    origin: (origin, callback) => {
        origin: true
        callback(null, true)
    },
    credentials: true
}

let db;

mongoose.connect(process.env.MONGODB_CLOUD, {useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise;
db = mongoose.connection;

db.once('open', () => {
    console.log("MongoDB connection to Atlas Server has been established");
})

db.on('error', console.error.bind(console, 'MongoDB connection error \n'));


app.get('/', cors(corsOptions), (req, res, next) => {
    res.status(200).redirect("http://localhost:3000");
})

app.use(cors(corsOptions));

app.use("/users", require("./api/users.js"));
app.use("/handler", require("./api/handleCodes.js"));
app.use("/welcome", require("./login/welcome.js"));

require("./models/orders.js");
require("./models/users.js");

app.use((req, res, next) => {
    next(createError(404));
})

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})