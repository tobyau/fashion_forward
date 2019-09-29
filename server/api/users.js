const express = require("express"); // express
const router = express.Router();    // router for express

const mongoose = require("mongoose");   // mongoose to manage db calls 
const Users = require("../models/users.js");    // import the users schema
const crypto = require("crypto");
const passport = require('passport');
require("dotenv").config();

// express routes ======================================================== 


router.get("/login", (req, res) => {
    res.render('login');
});

// triggered when the user tries to make a login request
router.post("/login", (req,res, next) => {
    console.log("in the route");
    // Login Handle
   
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
    })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

router.get("/register", (req, res) => {
    res.render("register");
})

// triggered when a new user needs to be
router.post("/create", (req, res) => {

    const {lname, fname, email, address, phone, password, password2 } = req.body;
    let errors = [];
    
    // Check required fields
    if(!fname || !lname || !email || !address || !phone || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check password match
    if(password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check pass length
    if(password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if(errors.length > 0) {
        res.render('register', {
        errors,
        lname,
        fname,
        email,
        address,
        phone,
        password,
        password2
        });
    }
    else{
        Users.findOne({email: req.body.email}, async (err, match) => {
            if(err){
                console.log(err);
            }
            else if(match){
                errors.push({ msg: 'Email is already registered' });
                res.render('register', {
                    errors,
                    lname,
                    fname,
                    email,
                    address,
                    phone,
                    password,
                    password2
                });
                res.status(400).json({message: "The email is already registered"});
            }
            else{

                crypto.pbkdf2(req.body.password, process.env.SALT, parseInt(process.env.ITERATIONS), parseInt(process.env.KEYLEN), process.env.DIGEST, async (err, derivedKey) => {
                    if (err) throw err;
                    let password = derivedKey.toString('hex');

                    const User = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        lname: lname,
                        fname: fname,
                        address: address,
                        phone: phone,
                        email: email,
                        password: password
                    });
                    User.save()
                    .catch(err => {
                        console.log(err);
                        res.status(500).send(false);
                    });
                    req.flash('success_msg', 'You are now registered and can log in');
                    res.redirect('/users/login'); 
                });
            }
        })
    }
    
});


// remove these routes later
router.get("/all", (req, res) => {

    Users.find({}, (err, match) => {
        console.log(match);
        res.send(match);
    });
});

router.delete("/delete/:email", (req,res) => {

    Users.deleteOne({email: req.params.email}, (err) => {
        if(err) console.log(err);
        console.log("deleted ", req.params.email);
        res.send(200);
    })
});

module.exports = router;