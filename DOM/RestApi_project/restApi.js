const veg_form=document.getElementById('add-veg-form');
const vegTable = document.getElementById('veg-table');
const vegTotal = document.getElementById('head');
let total=0;

//display vegetable detail on screen
 async function displayVeg(){
  try{
    vegTable.innerHTML = '';
    vegTotal.innerHTML = '';

   const res = await axios.get("https://crudcrud.com/api/82679b559d3d4c1bb53a6c076a505fdc/vegData")
   // .then((res)=>{
     {
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
   // })
    }
  }
    catch(error){console.log(error)};  
  }
  
     
  

//add vegetable to crudcrud
function addVeg(event){
    event.preventDefault();
    total++;
    var text = veg_form['text'].value;
    var price = veg_form['price'].value;
    var quantity = veg_form['quantity'].value;
  
    const obj=({
      text,
      price,
      quantity
    });
   
    // Save the veg to crud crud
    axios.post("https://crudcrud.com/api/82679b559d3d4c1bb53a6c076a505fdc/vegData",obj)
    .then(()=>{
        displayVeg()
    })
    .catch((err)=>{console.log(err)});
  }
 
  // Delete an veg
function deleteVeg(U_id) {
  axios.delete(`https://crudcrud.com/api/82679b559d3d4c1bb53a6c076a505fdc/vegData/${U_id}`)
  .then(()=>{
    total--;
    displayVeg();
})
.catch((err)=>{console.log(err)});
}

//edit veg quantity after pressing buy button.
function buyVeg(quant, id, price, text, kg){
  quant=quant-kg.value;
  quant = quant.toString();
  
  axios.put(`https://crudcrud.com/api/82679b559d3d4c1bb53a6c076a505fdc/vegData/${id}`,{
     text,
     price,
     quantity:quant
  })
  .then(()=>{displayVeg();
  })
  .catch((err)=>{console.log(err)});
}

//load all fields
displayVeg();


