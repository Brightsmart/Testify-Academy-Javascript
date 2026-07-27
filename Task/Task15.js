const books = [
    {
        title: "Things fall apart",
        description: "A novel written by Chinua Achebe",
        numberOfPages: 209,
        author: "Chinua Achebe",
        read: true
    },
    {
        title: "Lord of the Rings",
        description: "A novel written by J.R.R. Tolkein",
        numberOfPages: 209,
        author: "J.R.R. Tolkein",
        read: false
    },
    {
        title: "Oliver Twist",
        description: "A novel written by Charles Dickens",
        numberOfPages: 209,
        author: "Charles Dickens",
        read: true
    }
];

for (let numberOfBooks = 0; numberOfBooks <= books.length; numberOfBooks++){
    if(books[numberOfBooks].read === true){
        console.log(books[numberOfBooks])
    }
}

//console.log(books)