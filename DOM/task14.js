
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
      // objectli.appendChild('<button class="delete-btn">delete</button>');
      const deleteButton = document.createElement('button');
      const delbtnText=document.createTextNode('delete');
      deleteButton.appendChild(delbtnText);
      deleteButton.id='delete-btn';
      objectli.appendChild(deleteButton);
        console.log(objectli);

        const button=document.getElementById('delete-btn');
        button.addEventListener("click", function(event){
          event.preventDefault();
          const parentElement = button.parentNode;
          list.removeChild(parentElement);
          localStorage.removeItem("test@test.com")
        });
  }
  //module.exports=handleFormSubmit;