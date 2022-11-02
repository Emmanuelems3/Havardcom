const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());//this it to allow express evaluate request and response
app.use(cors());//allows  express to interact with our frontend


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/School-dbs')
.then(()=> console.log('App connected to database successfully'))
.catch(err => console.log(err))


//creating a schema /collection
const students = mongoose.Schema({
    studentName:String,
    age:Number,
    gender:String,
    course:String
})

const student = mongoose.model('student', students)

// const teachers = mongoose.Schema({
//     teachersName:String,
//     course:String,
//     salary:Number,
//     gender:String,
// })

// const teacher = mongoose.model('teacher', teachers)


//saving data in the collection created above

// const newTeacher = new teacher({
//     teachersName:'EMS',
//     course:'csc',
//     salary:2000000,
//     gender:'male',
// })

// newTeacher.save()

// const newStudent = new student({
//     studentName:'Ninina',
//     age:19,
//     gender:'female',
//     course:'zoology'
// })

// newStudent.save()
// .then(()=>{
//     console.log('New student added to database');
// })
// .catch(err => console.log(err))



//fetching all the data in a collection

// teacher.find()
// .then(res => console.log(res))
// .catch(err => console.log(err))

// student.find()
// .then(res => console.log(res))
// .catch(err => console.log(err))



//fetching data using a parameter

// student.find({course:'fishery'})
// .then(res => console.log(res))
// .catch(err => console.log(err))

// student.findById('63623a553b6714f6a9d1813b')
// .then(res => console.log(res))
// .catch(err => console.log(err))



//updating data in a collection
// findByIdAndUpdate and findOneAndUpdate are the same
// student.findByIdAndUpdate({_id:'63623a553b6714f6a9d1813b'} , {course:'Arts'})
// .then(res => console.log(res))
// .catch(err => console.log(err))


//delete data from a collection
// student.findByIdAndDelete({_id:'636239c884b451832d2be7ca'})
// .then(()=> console.log('Item deleted'))
// .catch(err => console.log(err))







// creating routes


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