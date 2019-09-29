const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const crypto = require('crypto');
require("dotenv").config();

// Load User Model
const Users = require('../models/users.js');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      Users.findOne({ email: email })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'That email is not registered' });
          }
          console.log(user);
          crypto.pbkdf2(password, process.env.SALT, parseInt(process.env.ITERATIONS), parseInt(process.env.KEYLEN), process.env.DIGEST, async (err, derivedKey) => {
            if (err) console.log(err);
            else{
              let passwordHashed = derivedKey.toString('hex');

              if(passwordHashed !== user.password){
                console.log("error if");
                console.log(err);
              }
              else if(passwordHashed === user.password){
                console.log("matched user");
                return done(null, user);
              }
              else{
                console.log("else");
                return done(null, false, {message : "password incorrect"})
              }
            }
          })
      })
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
      done(err, user);
    });
  });
}
