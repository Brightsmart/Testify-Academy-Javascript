const team = {
    defence: "Doku",
    midfield: "Majid",
    attack: "Daniel",
    coach: "Pep Guardiola",
    formation: function(){
        if(team.defence === "John"){
            team.defence = "Jose Morinho"
        }
        else{
            team.defence = "Zamborata"
        }
    }

}    

//team.formation()

const person = {
    name: "Bright",
    age: 24,
    siblings: ["John", "Majid", "Daniel"],
    addSiblings: function(name){
        person.siblings.push(name)
    }
}

person.addSiblings("Jill")
console.log(person)
