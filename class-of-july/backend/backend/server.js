const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());//this it to allow express evaluate request and response
app.use(cors());//allows  express to interact with our frontend


app.get('/', function(req, res){
    res.send('Hello you have successfully reached the backend');
})

//route rout
app.get('*', (req,res)=>{
    res.send('You entered a wrong route')
})


const port= 3000;
app.listen(port, ()=>{
    console.log(`App started at port ${port}`);
})