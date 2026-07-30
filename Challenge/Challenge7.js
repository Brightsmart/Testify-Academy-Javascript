const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function descendingOrder(arr) {
    let emptyArray = []
    for(let i =arr.length - 1; i >=0; i--){
        emptyArray.push(arr[i])
    }
    return emptyArray
}

console.log(numbers);
console.log(descendingOrder(numbers));