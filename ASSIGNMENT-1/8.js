// Your ES6 code here

const getBookInfo=(book)=>{
    const {title,author}=book;
    let ans=`${title} is written by ${author}`;
    return ans;
}
const book = { title: 'The Hobbit', author: 'J.R.R. Tolkien' }
console.log(getBookInfo(book)) // "The Hobbit by J.R.R. Tolkien