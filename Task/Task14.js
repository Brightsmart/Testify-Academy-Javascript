const Books = {
    title: "Things fall apart",
    description: "A novel written by Chinua Achebe",
    numerOfPages: 209,
    read: true,
    toggleReadingStatus: function(){
        if(Books.read === true){
            Books.read = false
        }
        else{
            Books.read = true
        }
    }
}

Books.toggleReadingStatus()
console.log(Books)