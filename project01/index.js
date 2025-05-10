const express = require('express')
const app = express()
const Path =require("path")
const fs = require('fs')

//parses
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,'public')));
app.set('view engine','ejs')

app.get("/",function(req,res){
    fs.readdir(`./files`,function(err, files){
          res.render("index",{files:files});
    })

})
app.post("/create",function(req,res){
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details ,function(err){ })
   res.redirect("/")

})
app.get("/author/:username/:age",function(req,res){
    res.send(`wlcome,${req.params.username},${req.params.age}`);
});
app.listen(3000,function(){
    console.log("project starrted ")

})