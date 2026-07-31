function vowelCheck(character){
    let vowels = "aeiouAEIOU"
    let count = 0
    for(let words of character){
        if(vowels.includes(words)){
            count++
        }
    } return count
}

console.log(vowelCheck("prestiDIGITATION"))