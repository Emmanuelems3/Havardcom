const fname = document.querySelector('#fname');
const sname = document.querySelector('#sname');
const gender= document.querySelector('#gender');
const email= document.querySelector('#email');
const dob= document.querySelector('#dob');
const origin= document.querySelector('#origin');
const nationality= document.querySelector('#nationality');
const religion= document.querySelector('#religion');
const details= document.querySelector('#other-details');
const header= document.querySelector('.header');
const del = document.querySelector('#delete');
const update = document.querySelector('#update');
const item = document.querySelector('.item');

fetchData()

function fetchData(){
    fetch('http://localhost:3000/fetchStudentInfo',{
        method:'GET'
    })
    .then(res => {
        return res.json()
    })
    .then(student =>{
        console.log(student);
        header.innerHTML='';
        student.forEach(student => {
            header.insertAdjacentHTML('afterbegin',`
                <div class="item">
                    <label for="">Firstname :</label>
                    <b id="fname">${student.firstname.toUpperCase()}</b><br>
    
                    <label for="">Surename :</label>
                    <b id="sname">${student.surename.toUpperCase()}</b><br>
    
                    <label for="">Date of birth :</label>
                    <b id="dob">${student.dateOfBirth.toUpperCase()}</b><br>
    
                    <label for="">State of Origin :</label>
                    <b id="origin">${student.origin.toUpperCase()}</b><br>
    
                    <label for="">Nationality :</label>
                    <b id="nationality">${student.nationality.toUpperCase()}</b><br>
    
                    <label for="">Gender :</label>
                    <b id="gender">${student.gender.toUpperCase()}</b><br>
    
                    <label for="">Email :</label>
                    <b id="email">${student.email}</b><br>
    
                    <label for="">Religion :</label>
                    <b id="religion">${student.religion.toUpperCase()}</b><br>
    
                    <label for="">other-details :</label>
                    <b id="other-details">${student.details}</b><br>
    
                    <button class="btn btn-primary" id="update"><a href="./update.html?&id=${student._id}=${student.firstname}=${student.surename}=${student.dateOfBirth}=${student.origin}=${student.nationality}=${student.gender}=${student.email}=${student.religion}=${student.details}">update</a></button>
                    <button class="btn btn-danger" id="delete" onclick="delStudent('${student._id}')">delete</button>
                </div>
            `)
        });
    })
}



function delStudent(id){
   fetch(`http://localhost:3000/deleteStudent/${id}`,{
        method:"POST"
   })
   .then(res=> {
        return res.json()
   })
   .then(res =>{ console.log(res)
    fetchData()
    })
   .catch(err => console.log(err))
}
