 // let head=document.createElement('h1');
 total=res.data.length;
 head.innerHTML=`<h1>Total: ${total}</h1>`
//  vegTotal.appendChild(head);

function displayTotal(){
    let vegTotal = document.getElementById('head');
    vegTotal.innerHTML = '';
  
    axios.get("https://crudcrud.com/api/0f32f258a6044daaa6db14b60eac9dd4/vegData")
    .then((res)=>{
      total=res.data.length;
      head.innerHTML=`<h1>Total: ${total}</h1>`
    })
    .catch((err)=>console.log(err))
  }

  
  ${Dat.quantity}','${Dat._id}','${Dat.price}','${Dat.text}

  function displayVeg(){
    vegTable.innerHTML = '';
    vegTotal.innerHTML = '';

    axios.get("https://crudcrud.com/api/82679b559d3d4c1bb53a6c076a505fdc/vegData")
    .then((res)=>{
     
      for(let i=0;i<res.data.length;i++){
        const Dat=res.data[i];
        let row=document.createElement('tr');
        row.innerHTML = `
        <td>${Dat.text}</td>
        <td>Rs: ${Dat.price}</td>
        <td>${Dat.quantity}KG</td>
        <td><label for="in-${Dat._id}"></label><input type="number" id="in-${Dat._id}"></input><button onclick="buyVeg('${Dat.quantity}','${Dat._id}','${Dat.price}','${Dat.text}',document.getElementById('in-${Dat._id}'))">Buy</button></td>
        <td><button onclick="deleteVeg('${Dat._id}')">Delete</button></td>`;  
        vegTable.appendChild(row);
      }
    
      total=res.data.length;
      head.innerHTML=`<h1>Total: ${total}</h1>`;

    })
    .catch(error=>{console.log(error)});  
  }
  
     