const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, '/../public'); //configurando o caminho, path.join é a melhor opção
const port = process.env.PORT || 3000; 
var app = express();

app.use(express.static(publicPath));


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
})
