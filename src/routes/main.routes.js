const express = require("express");
const router = express.Router();
const {home,contact,about} = require('../controllers/main.controller')
//const mainControllers = require('../controllers/main.controller')
// mainControllers.home // por ejemplo...

router.get('/home', home);
router.get('/contact', contact);
router.get('/about', about) ;



//con este saco los datos
module.exports = router;
