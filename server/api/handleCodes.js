const express = require("express");
const router = express.Router();

const Users = require("../models/users.js");
// express methods ================================================================

// check if the user passed the secret code or not. 
// code can be embedded as a substring in a larger string.
//Eg: apple in pineapple OR apple in thiskshdkajsdh<apple>lskd 
router.post("/check", (req, res) => {

    // check for all conditions (for now)
    // later check for each one individually 
    let regCheck = new RegExp(`${process.env.LOW}|${process.env.MEDIUM}|${process.env.HIGH}`);
    console.log("The route was just hit", req.body.code);
    if(regCheck.test((req.body.code).toLowerCase())){
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }
});

router.post("/check/code", (req, res) => {


    let regCheckLow = new RegExp(process.env.LOW);
    let regCheckMed = new RegExp(process.env.MEDIUM);
    let regCheckHigh = new RegExp(process.env.HIGH);
    let user, priority;

    if(regCheckLow.test(req.body.code)) priority= 0;
    else if(regCheckMed.test(req.body.code)) priority= 1;
    else if(regCheckHigh.test(req.body.code)) priority= 2;
     

    Users.findOne({email: req.body.email}, (err, match) => {

        if(err){
            console.log(err);
        }
        else{
            let data = {
                name: match.fname + " " + match.lname,
                address:match.address,
                priority: priority
            }
            console.log("here");
            let func = require("../sms/send_sms.js");
            console.log("after");
            func(data);
            res.status(200).send("done");
        }
    });
});

module.exports = router; 