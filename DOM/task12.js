


// const accessForm=document.querySelector('#Form');
// accessForm.addEventListener('submit',function(event){
//     event.preventDefault();
//     let Form=document.querySelector("#Form");
//         let u_name=Form.querySelector("#u_name").value;
//         let Email=Form.querySelector("#email").value;
//         let Phone=Form.querySelector("#phone").value;
//       //  console.log(u_name);
    
//         localStorage.setItem("Username", u_name);
//         localStorage.setItem("Email", Email);
//         localStorage.setItem("Phone", Phone);
    
//     });

function handleFormSubmit(event){
  event.preventDefault();
  let Form=document.querySelector("#Form");
        let u_name=Form.querySelector("#u_name").value;
        let Email=Form.querySelector("#email").value;
        let Phone=Form.querySelector("#phone").value;
      //  console.log(u_name);
    
        localStorage.setItem("Username", u_name);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Phone", Phone);
}
// task 13
// function handleFormSubmit(event){
//   event.preventDefault();
  
//   let myObj={   
//     "email":"test@test.com",
//     "phone":"1234567890",
//     "username":"Test Name",
//   };
     
// let myObj_str=JSON.stringify(myObj);
// localStorage.setItem("User Details",myObj_str);
      
// }
// module.exports=handleFormSubmit;

  s