const express = require('express');
const router = express.Router();


router.delete('/item/:id', (req,res)=>{
    const { id } = req.params;
    res.send(`Usted quiere eliminar el item: ${id} `)
    // res.redirect('/');
})



module.exports = router;

// <form action="/admin/delete/9?_method=DELETE" method="POST">
//                     <button class="admin-table__btn-delete" type="submit">
//                         <iconify-icon icon="heroicons-solid:trash" style="color: #f33;"></iconify-icon>
//                     </button>
//                 </form>