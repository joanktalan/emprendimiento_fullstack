
const path = require('path');

function about(req,res){ //Esto tambien es valido
    res.send("Esta es la vista de About")
}


module.exports = {
    home:(req,res) => res.render('index',{
        title: "Emprendimiento"
    }),
    contact: (req,res) => res.send("Esta es la vista de contacto"),
    about,
}