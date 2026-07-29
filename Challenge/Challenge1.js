const numbers = [10, 20, 40, 40, 50];
const addition = numbers.reduce((startValue, currentValue) => startValue + currentValue, 0)

console.log(addition)