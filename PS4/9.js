const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [
    { name: 'David Flanagan', age: 49 },
    { name: 'Yukihiro Matsumoto', age: 57 },
    ],
    publisher: { name: "O'Reilly Media", location: 'CA' },
   }
   const title=book.title;
   const author1=book.authors[0].name;
   const author2=book.authors[1].name;
   const publisherName=book.publisher.name;
   console.log(title) // JavaScript: The Definitive Guide
   console.log(author1) // David Flanagan
   console.log(author2) // Yukihiro Matsumoto
   console.log(publisherName) // O'Reilly Media