const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' } ];
        // Your code here
const getBookTitles=books=>books.map(book=>book.title)


        const titles = getBookTitles(books);
        console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', '