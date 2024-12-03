const express = require("express");
const app = express();
const port = 3000;


app.get("/" , (req,res) => {

    res.send("server on");
});


app.listen(port, () =>{

    console.log("server partito");
    
})

