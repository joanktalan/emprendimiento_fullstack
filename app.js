//Librería Express
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

//Controladores
const mainRoutes = require('./src/routes/main.routes');
const productsRoutes = require('./src/routes/products.routes');


const PORT = 3000; 

//Middlewares de configuracion

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ // ---> Este sirve para agarrar los datos del body y que esten traducidos
    extended: true
  })); 
app.use(express.json()); //  ----> Este lo mismo
app.use(methodOverride('_method'))

//Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/src/views'));
app.set('views', path.join(__dirname + '/src/views'));

//Rutas
app.use('/', mainRoutes);
app.use('/productos', productsRoutes);

app.use((req,res,next)=>{
    res.status(404).send('Recurso no encontrado'); // ----> Podría enviarle una vista si quiero personalizada
})

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))






// const fs = require('fs');
//Asi los envio por ruta
// // app.get('/items', (req,res)=>{
// //     res.sendFile(__dirname + "/src/data/items.json");
// // })


// //Esto es una RUTA PARAMETRIZADA
// app.get('/items/:id', (req,res)=>{
//     //Leo el archivo y lo guardo  en una variable. Uso FS para ello
//     const data = fs.readFileSync(__dirname + "/src/data/items.json");
//     //Transformo el JSON en un Array y lo guardo en una variable
//     const items = JSON.parse(data)
//     //Uso la funcion "find" para que lo busque por ID
//         //El id lo saco del "Request"/Req ya que se envia el dato x ahi
//             //lo va a sacar de la ruta.
//     const item = items.find(item => item.id == req.params.id);

//     res.send(item);
// })


// //Asi los envio por ruta con QUERY
// //Acá tendria un programa que me filtra si "incluye" una letra
// //Si quisiera hacerlo por palabra tendría que usar ===

// // === es para comparar si son iguales y del mismo tipo
// // == se podria usar para ver si "42" y 42 son iguales

// app.get('/items', (req,res)=>{
//     const data = fs.readFileSync(__dirname + "/src/data/items.json");
//     const items = JSON.parse(data);

//     if(req.query.search){
//         const result = items.filter(item => item.name.includes(req.query.search) )
//         res.send(result);
//     }else{
//         res.sendFile(__dirname + "/src/data/items.json");
//     }
// })