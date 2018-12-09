const express = require('express') ;
const expressGraphql = require('express-graphql') ;
const app = express() ;

const portNum = 3002 ;

app.use('/graphql',expressGraphql({

}));

app.listen(portNum,()=>{
    console.log('Backend is processing at port: '+portNum) ;
})