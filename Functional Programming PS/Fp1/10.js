// Your ES6 code here
const filterByCityAndAge=arr=>arr.filter(obj=>obj.city=='Indore' && obj.age>70 )
const people = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' },
   ]
   const filteredPeople = filterByCityAndAge(people)
   console.log(filteredPeople)
   // Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, 