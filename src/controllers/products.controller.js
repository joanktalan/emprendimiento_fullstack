const path = require('path');
const fs = require('fs');

const productos = fs.readFileSync(path.resolve(__dirname + '../../data/products.json'));
const productosJSON = JSON.parse(productos);


function products(req,res){

    const {categoria} = req.query;

    res.render('./productos/products',{
        title: "Productos",
        productos:productosJSON,
        categoria:categoria
    })
    
}

function product(req,res){
    const {id} = req.params;
    const producto = productosJSON.find((producto) => producto.id==id)
    console.log(id);
    res.render('./productos/product',{
        title: producto.name,
        producto:producto
    })
}



module.exports = {
    products,
    product
}


// router.get('/item/:id', (req, res) => {
//     const { id } = req.params; //  const id = req.params.id  ----> Asi capaz lo entiendo más
//     res.send(`Usted solicito el item: ${id}`)