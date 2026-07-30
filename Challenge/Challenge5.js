
 function reversal(arr) {
    let emptyArray = []
    for(let i = arr.length - 1; i >=0; i--){
        emptyArray.push(arr[i])
        
    }
    return emptyArray
}


const Array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] 
console.log(Array);
console.log(reversal(Array));

