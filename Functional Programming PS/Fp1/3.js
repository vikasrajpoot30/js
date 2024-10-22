
const getAges=people=>people.map(people=>people.age);


const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 },
   ]
   const ages = getAges(people)
   console.log(ages) // Output: [25, 24, 29]