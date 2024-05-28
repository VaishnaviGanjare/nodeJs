function bookSearchPromise() {

    return new Promise((resolve, reject)=>{
    const bookSearch=Math.random()>0.5;
    setTimeout(function(){
       if(bookSearch){
      resolve('Book found')
    }
    else{
      reject('Book not found')
    }
      }, 3000)
    });
    }
    
  
    bookSearchPromise()
      .then((result)=>{
        console.log(result);
      })
      .catch((error)=>{
        console.log(error);
      })
    
   