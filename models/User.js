const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

    //when sign up and creating user
    // User model from the todos container, 
    // each user will have username, email, and password
    //schema in a way is a template for db
const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String
})


// PASSWORD HASH MIDDLEWARE 
 
    // hashing password using bcrypt to store to database
    // hashing = instead of plain text passwords in db (bad for security), salted password

 UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})


// HELPER METHOD FOR VALIDATING USER'S PASSWORD.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}


module.exports = mongoose.model('User', UserSchema)
