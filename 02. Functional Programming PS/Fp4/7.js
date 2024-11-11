const people = [
    { name: 'Jeena', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Naina', age: 45 },
   ]
   // Your code here
   const oldestPersonName=(people)=>people.reduce((oldest,person)=>person.age>oldest.age?person:oldest)
   console.log(oldestPersonName(people))
   // Output: 'Naina'