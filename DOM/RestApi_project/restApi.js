let total=0;


function displayVeg(){
    let vegTable = document.getElementById('veg-table');
    vegTable.innerHTML = '';

    axios.get("https://crudcrud.com/api/8d1b7289685c4d3bba38fa21ad3687ec/vegData")
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
    })
    .catch((err)=>console.log(err))   
  }

function displayTotal(obj){
  let vegTotal = document.getElementById('head');
  vegTotal.innerHTML = '';

  axios.get("https://crudcrud.com/api/8d1b7289685c4d3bba38fa21ad3687ec/vegData")
  .then((res)=>{
    let head=document.createElement('h1');
    total=res.data.length;
    head.innerHTML=`<h1>Total: ${total}</h1>`
    vegTotal.appendChild(head);
  })
  .catch((err)=>console.log(err))

}

function addVeg(event){
    event.preventDefault();
    total++;
    var text = document.getElementById('add-veg-form')['text'].value;
    var price = document.getElementById('add-veg-form')['price'].value;
    var quantity = document.getElementById('add-veg-form')['quantity'].value;
  
    const obj=({
      text,
      price,
      quantity
    });
   
    // Save the veg to crud crud
    axios.post("https://crudcrud.com/api/8d1b7289685c4d3bba38fa21ad3687ec/vegData",obj)
    .then((response)=>{
        console.log(response)
        displayVeg()
        displayTotal()
    })
    .catch((err)=>{console.log(err)});
  }
  
  // Delete an veg
function deleteVeg(U_id) {
 
  axios.delete(`https://crudcrud.com/api/8d1b7289685c4d3bba38fa21ad3687ec/vegData/${U_id}`)
  .then((resp)=>{
    console.log(resp)
    total--;
    displayVeg();
    displayTotal();
})
.catch((err)=>{console.log(err)});
}

function buyVeg(quant, id, price, text, kg){

  const input=kg.value
  quant=quant-input;
  quant = quant.toString();
  console.log(quant);
  axios.put(`https://crudcrud.com/api/8d1b7289685c4d3bba38fa21ad3687ec/vegData/${id}`,{
     text,
     price,
     quantity:quant
  })
    .then((resp)=>{
      console.log(resp)
      displayVeg();
      displayTotal();
  })
  .catch((err)=>{console.log(err)});
}

//load all fields
displayVeg();
displayTotal();
