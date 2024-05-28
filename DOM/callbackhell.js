function buyBike() {
    return new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve("Bought Royal Enfield Himalayan")
      }, 2000);
    })
  }
  
  function planTrip() {
    return new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve("Trip to Ladakh planned")
      }, 1000);
    })
  }
  
  function reachLadakh() {
    return new Promise((resolve, reject)=>{
      resolve("Reached Ladakh")
    }, 1000);
  }
  
  //In last function we dont use promise as it is call in last then
  function visitPangongLake() {
    setTimeout(function(){
     console.log("Visited Pangong Lake");
    }, 500);
  }
  
  buyBike()
  .then((result)=>{
    console.log(result);
    
    planTrip()
      .then((result)=>{
       console.log(result);
        
    reachLadakh()
       .then((result)=>{
        console.log(result);
    
        visitPangongLake();
    });
    });
  });