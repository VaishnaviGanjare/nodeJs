function orderFood() {
    return new Promise((resolve, reject)=>{
      const foodDeliver=false;
      setTimeout(function(){
        if(foodDeliver){
          resolve("Food delivered");
        }
        else{
          reject("Food not delivered");
        }
      }, 2000);
    });
  }
  
  function orderDessert() {
    return new Promise((resolve, reject)=>{
      const dessertDeliver=false;
      setTimeout(function(){
        if(dessertDeliver){
          resolve("Dessert delivered");
        }
        else{
          reject("Dessert not delivered");
        }
      }, 2000);
    });
  }
  
  orderFood()
  .then((foodMsg)=>{
    console.log(foodMsg);
    return orderDessert();
  })
    .then((dessertMsg)=>{
      console.log(dessertMsg);
    })
  .catch((err)=>{
    console.log(err);
   // console.log("Dream meal failed");
  })