const express = require("express");
const router = express.Router();
const ProductControllers = require('../controllers/products.controller');

//Esto me sirve para ir a buscar los archivos y ponerlos en el sendFile.
    //en caso contrario va a pensar que la ruta del archivo es una "url"


router.get('/', ProductControllers.products);
router.get('/producto/:id', ProductControllers.product);





//con este saco los datos
module.exports = router;

//Del req.params saco lo que el usuario envió