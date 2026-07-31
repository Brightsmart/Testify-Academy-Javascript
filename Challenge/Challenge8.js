function bool(number){
    if(number > 0 && number % 10 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(bool(10.70));