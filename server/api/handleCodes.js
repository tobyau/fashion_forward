const express = require("express");
const router = express.Router();


// express methods ================================================================

// check if the user passed the secret code or not. 
// code can be embedded as a substring in a larger string.
//Eg: apple in pineapple OR apple in thiskshdkajsdh<apple>lskd 
router.post("/check", (req, res) => {

    // check for all conditions (for now)
    // later check for each one individually 
    let regCheck = new RegExp(`${process.env.LOW}|${process.env.MEDIUM}|${process.env.HIGH}`)

    if(regCheck.test((req.body.code).toLowerCase())){
        res.status(200).send({"message": "You entered the code"});
    }
    else{
        res.status(400).send({"message": "Invalid Code."});
    }
});

module.exports = router;

