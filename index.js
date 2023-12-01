const express = require ('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const port = process.env.port ||8080 ;

const io = require('socket.io')(http);

io.on('connection',socket=>{

})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/index.html'))
    })

    app.listen(port,()=>{
        console.log(`App listening on port ${port}`);
    })