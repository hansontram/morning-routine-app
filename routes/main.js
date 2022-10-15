const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)          // loading main page
router.get('/login', authController.getLogin)     // loading login page
router.post('/login', authController.postLogin)   // update login
router.get('/logout', authController.logout)      // loading logout page
router.get('/signup', authController.getSignup)   // loading sign up page
router.post('/signup', authController.postSignup) // update signup 

module.exports = router