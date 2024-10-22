book= {
    title:"the alchemist",
    author:"paulo",
    pages:160
}

function getBookDetails(book){
    return book.pages>=100;
}

console.log(getBookDetails(book))