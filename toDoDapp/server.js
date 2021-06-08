const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")
const PORT = 2700;

app.use(express.static(__dirname+"/public/"))
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(PORT,()=>console.log(`Server is running on port : ${PORT}`))

