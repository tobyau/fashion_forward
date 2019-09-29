const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
// router.get('/', ensureAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{ 
  console.log("This is the route!!!!");
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;