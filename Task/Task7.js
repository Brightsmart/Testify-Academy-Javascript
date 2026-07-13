const side1 = 2
const side2 = 1
const side3 = 3

if(side1===side2 && side1===side3 && side2===side3){
    console.log("Equilateral Triangle")
}else if(side1===side2 || side1===side3 || side2===side3){
    console.log("Isosceles Triangle")
}else
    console.log("Scalene Triangle")