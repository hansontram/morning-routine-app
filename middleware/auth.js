module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  
  //function for ensureAuth that checks if you are logged in
  //if logged in move onto next
  //if not then redirect to homepage