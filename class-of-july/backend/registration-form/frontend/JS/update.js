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


let id=window.location.search.split('=')[1]

    let info={
        firstname:window.location.search.split('=')[2],
        surename:window.location.search.split('=')[3],
        gender:window.location.search.split('=')[7],
        email:window.location.search.split('=')[8],
        dateOfBirth:window.location.search.split('=')[4],
        origin:window.location.search.split('=')[5],
        nationality:window.location.search.split('=')[6],
        religion:window.location.search.split('=')[9],
        details:window.location.search.split('=')[10],
    }
    console.log(info)
    
    fname.value=info.firstname;
    sname.value=info.surename;
    gender.value=info.gender;
    email.value=info.email;
    dob.value=info.dateOfBirth;
    origin.value=info.origin;
    nationality.value=info.nationality;
    religion.value=info.religion;
    details.value=info.details;







function update(){

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

    fetch(`http://localhost:3000/updateStudent/${id}`,{
        method:'POST',
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify(info)
    })
    .then(res=>{
        return res.json();
    })
    .then(res =>{
        console.log(res);
    })
    .catch(err=> console.log(err))
}