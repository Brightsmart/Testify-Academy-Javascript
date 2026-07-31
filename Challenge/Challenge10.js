const numbers = [1, -6, 7, -10, 9, 60, -12, -5, -100, 34, -7, -1, 5]

function negFilter(num){
    let negative = []
    for(let i = 0; i < num.length; i++){
        if(num[i] < 0){
            negative.push(num[i])
        }
    }
    return negative
}

console.log(negFilter(numbers))