const express=require('express');
const res=require('express/lib/response');
const app=express();
app.get('/',(req,res) => {
    res.send("ova e get metoda")
})
    app.post('/',(req,res)=>{
        res.send("ova e post metoda")
    })
    app.post('/random',(rsq,res)=>{
        res.send("ova e random post metoda")
    })
    app.listen(4000)
