const books = [
   { 
     title: "Shrimad Bhagavad Gita",
     author: "Maharishi Ved Vyas",
     year: 400 + ' BCE'
    },
    {
        title: "To Kill a Mockinbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "Who are you ?",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    }
]

function logTitles(titles){
    titles.sort()
    console.log("Titles of the Book are: ",titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((book) => book.title)
    callback(titles)
}

extractTitles(books, logTitles)