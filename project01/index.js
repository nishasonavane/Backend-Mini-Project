const express = require('express')
const app = express()
const Path =require("path")

//parses
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,'public')));
app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("index")

})
app.get("/author/:username/:age",function(req,res){
    res.send(`wlcome,${req.params.username},${req.params.age}`);
});
app.listen(3000,function(){
    console.log("project starrted ")
})