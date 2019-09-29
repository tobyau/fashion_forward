module.exports = {
  ensureAuthenticated: function(req, res, next) {
    console.log("req is: " , req.body)
    console.log("req is: " , req.session.passport)
    
    if(req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Please log in to view this resource');
    res.redirect('/users/login');
  }
}
