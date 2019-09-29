const express = require("express"); // express
const router = express.Router();    // router for express

const mongoose = require("mongoose");   // mongoose to manage db calls 
const Users = require("../models/users.js");    // import the users schema
const crypto = require("crypto");


// helper functions ======================================================

// async function getHash(password){
//     let fVal;
//     await 
//     console.log("beforeReturn")
//     return(fVal);    
// } 

// express routes ======================================================== 

// triggered when the user tries to make a login request
router.post("/login", (req,res) => {

    let password = getHash(req.body.password);
    Users.findOne({email: req.body.email, password: password}, (err, match) => {
        
        if(match){
            res.status(200).send("You have been successfully authenticated");    
        }
        
        res.status(404).json({message: "Bad request"});
    });
})

// triggered when a new user needs to be
router.post("/create", (req, res) => {

    Users.findOne({email: req.body.email}, async (err, match) => {
        if(err){
            console.log(err);
        }
        else if(match){
            res.status(400).json({message: "The email is already registered"});
        }
        else{
            console.log("Outside function")

            crypto.pbkdf2(req.body.password, process.env.SALT, parseInt(process.env.ITERATIONS), parseInt(process.env.KEYLEN), process.env.DIGEST, async (err, derivedKey) => {
                if (err) throw err;
                console.log('In here');
                let password = derivedKey.toString('hex');
                console.log("Hashing done");

                const User = new Users({
                    _id: new mongoose.Types.ObjectId(),
                    lname: req.body.lname,
                    fname: req.body.fname,
                    address: req.body.address,
                    phone: req.body.number,
                    email: req.body.email,
                    password: password
                });
                User.save()
                .catch(err => {
                    console.log(err);
                    res.status(500).send(false);
                });
                console.log('I am done');                
                res.status(200).send("Ok");
            });
        }
    })
    
});


// remove these routes later
router.get("/all", (req, res) => {

    Users.find({}, (err, match) => {
        console.log(match);
        res.send(match);
    })
});

router.delete("/delete/:email", (req,res) => {

    Users.deleteOne({email: req.params.email}, (err) => {
        if(err) console.log(err);
        console.log("deleted ", req.params.email);
        res.send(200);
    })
});


module.exports = router;