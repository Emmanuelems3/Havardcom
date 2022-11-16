const fname = document.querySelector('#fname');
const sname = document.querySelector('#sname');
const gender= document.querySelector('#gender');
const email= document.querySelector('#email');
const dob= document.querySelector('#dob');
const origin= document.querySelector('#origin');
const nationality= document.querySelector('#nationality');
const religion= document.querySelector('#religion');
const details= document.querySelector('#other-details');
const submit= document.querySelector('#submit');
const form= document.querySelector('#form');
const header= document.querySelector('.header');



function createForm(){
    let info={
        firstname:fname.value,
        surename:sname.value,
        gender:gender.value,
        email:email.value,
        dateOfBirth:dob.value,
        origin:origin.value,
        nationality:nationality.value,
        religion:religion.value,
        details:details.value,
    }
    console.log(info)

    fetch('http://localhost:3000/createStudentForm',{
        method:'POST',
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify(info)
    })
    .then(res=>{
        return res.json();
    })
    .then(res=> console.log(res))
    .catch(err => console.log(err));
}


