// Your ES6 code here

const filterByAge=arr=>arr.filter(people=>people.age>30)

const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 },
   ]
   console.log(filterByAge(people))
   // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]