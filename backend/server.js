const express = require('express'); 
const app = express() ;

app.get('/',(req,res)=>{
    res.json() ;
})

app.listen(3002,()=>{
    console.log('online') ;
}) ;