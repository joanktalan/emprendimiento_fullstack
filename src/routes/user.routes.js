const express = require('express');
const router = express.Router();


router.post('/login', (req,res)=>{
    const {user, password} = req.body;

    res.redirect('/');
})



module.exports = router;