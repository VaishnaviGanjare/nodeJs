// function buyBike(callback){
//     setTimeout(function(){console.log("Bought Royal Enfield Himalayan");callback();},2000);
    
//   }
  
//   function planTrip(){
//     setTimeout(function(){console.log("Trip to Ladakh planned")},1000);
//   }
//   buyBike(planTrip);
function writeLetter(callback){
    setTimeout(function(){
      console.log("Wrote Letter");callback();
    },2000)
  }
  
  function postLetter(){
    setTimeout(function(){
      console.log("Letter posted");
    },1000)
  }
  
  writeLetter(postLetter);