const express=require('express');
const app=express();

app.use(express.json()); //to understand json file
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("hello this is responce")
})

app.listen(3000);