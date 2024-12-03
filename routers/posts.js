const express = require("express");
const router = express.Router();
const postList = require("../data/posts");

//index
router.get("/", (req,res) => {

    res.json({
        data : postList,
        total : postList.length
    });
})

//show
router.get("/:id", (req,res) =>{

    const postid = parseInt(req.params.id);

   // res.json("leggiamo l'elemento con id " +postid );
   const result = postList.map( curItem =>{

         if(curItem.id=== postid){
            
            return curItem
        };
    
   });
   res.send(result);
   

   res.json(postList[0]);
});

//create
router.post("/" , (req,res) => {

    res.json("aggiungo un nuovo elemento");
})

//update
router.put("/:id" , (req,res) =>{

    const postid = req.params.id;
    res.json("modifico i dati dell'elemento con id " +postid);

});

//modify
router.patch("/:id" , (req,res) => {

    const postid = req.params.id;
    res.json("modifichiamo gli specifici dati dell'elemento con id " +postid);
});


//destroy
router.delete("/:id", (req,res) => {

    const postid = req.params.id;
    res.json("elimino l'elemento con id " +postid);
});


module.exports = router;