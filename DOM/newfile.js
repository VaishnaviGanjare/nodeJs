function findStudent(obj, age){
    //Complete this function by yourself
    //it takes in student Object and age of student which is to be found
    //should return name of student whose age matches
    //If nothing matches return -1
    let ans=-1;
   return Object.keys(obj).forEach(key => {
         
        obj[key] == age?key:key++;
            // console.log(key);
           

    });
    return -1;
}


// Do not change anything below this 
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            const argumentsArr = inputArr[0].split(',');
        
            const obj = {}
            argumentsArr.forEach(argument => {
                const argumentArr = argument.split(' ')
                obj[argumentArr[0]] = Number(argumentArr[1])
            })
            
            console.log(findStudent(obj, Number(inputArr[1])))
            process.exit();
        })
}
readInput();