function handleFormSubmit(event){
    event.preventDefault();
    
    let myObj={   
      "email":"test@test.com",
      "phone":"1234567890",
      "username":"Test Name",
    };
       
  let myObj_str=JSON.stringify(myObj);
  localStorage.setItem("test@test.com",myObj_str);
  
  const print=localStorage.getItem("test@test.com");
  let printObj=JSON.parse(print);
   
  const list = document.getElementById('lists');
  const objectli= document.createElement('li');
  objectli.classList.add("printObj");
    // Create HTML content to display object propertiess
const htmlContent = `<li>email: ${printObj.email} phone: ${printObj.phone} uname: ${printObj.username}</li>`;
           
        //this line with not print value of printObj.phone it will print text as it is hence we need to add display properties like above 
        //const htmlContent="<li>email: printObj.email, phone: printObj.phone, uname: printObj.username</li>";

        // Set the HTML content of the list
        objectli.innerHTML = htmlContent;
        
        // Append the list to the container this line will print html content on the screen with the help of display properties
        //we define earlier
        list.appendChild(objectli);

      //add delete button
      const deleteButton = document.createElement('button');
      const delbtnText=document.createTextNode('delete');
      deleteButton.appendChild(delbtnText);
      deleteButton.id='delete-btn';
      objectli.appendChild(deleteButton);
     // console.log(objectli);

      //add edit button
      const editButton = document.createElement('button');
      const edibtnText=document.createTextNode('edit');
      editButton.appendChild(edibtnText);
      editButton.id='edit-btn';
      objectli.appendChild(editButton);
      //console.log(edibtnText);


        const button=document.getElementById('delete-btn');
        button.addEventListener("click", function(event){
          event.preventDefault();
          const parentElement = button.parentNode;
          list.removeChild(parentElement);
          localStorage.removeItem("test@test.com")
        });

        const ebutton=document.getElementById('edit-btn');
        ebutton.addEventListener("click", function(event){
          event.preventDefault();
          const eparentElement = ebutton.parentNode;
          list.removeChild(eparentElement);
          localStorage.removeItem("test@test.com")

          let u=document.getElementById('username');
          let e=document.getElementById('email');
          let p=document.getElementById('phone');
          console.log(u);
          u.value='Test Name';
          e.value='test@test.com';
          p.value="1234567890";

        });
  }
  //module.exports=handleFormSubmit;