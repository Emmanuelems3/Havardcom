const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());//this it to allow express evaluate request and response
app.use(cors());//allows  express to interact with our frontend


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/Registration-form')
.then(()=> console.log('App connected to database successfully'))
.catch(err => console.log(err))


const students = mongoose.Schema({
    firstname:String,
    surename:String,
    gender:String,
    email:String,
    dateOfBirth:String,
    origin:String,
    nationality:String,
    religion:String,
    details:String,
})

const student = mongoose.model('student', students)

app.post('/createStudentForm', (req,res)=>{
    console.log(req.body)
})



app.get('/test', (req, res)=>{
    res.json({message:'Hello you have successfully reached the backend'});
})


//route rout
app.get('*', (req,res)=>{
    res.send('You entered a wrong route')
})


const port= 3000;
app.listen(port, ()=>{
    console.log(`App started at port ${port}`);
})