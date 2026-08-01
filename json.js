const Bravo = {
    name: "Bright",
    age: 32,
    city: "New York"
}

const json = JSON.stringify(Bravo)

console.log(json)
console.log(JSON.parse(json))