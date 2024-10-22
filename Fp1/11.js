// Your ES6 code here
const filterByGenre=(books,genre)=>books.filter(book=>book.genre===genre);

const books = [
    {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    genre: 'Science Fiction',
    },
    {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    },
    { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
   ]
   const filteredBooks = filterByGenre(books, 'Science Fiction')
   console.log(filteredBooks)
   // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", g