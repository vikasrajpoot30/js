const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
   ]
   // Your code here
   const getAverageAge=(people)=>{
    let sumOfAge= people.reduce((sum,person)=>sum+person.age,0)
    let average=sumOfAge/people.length;
    return {averageAge:average};
   }
   console.log(getAverageAge(people))
   // Output: { averageAge: 32.5 }
   