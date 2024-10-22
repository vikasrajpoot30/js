// Your ES6 code here
const getNamesOfAdults=(people)=>{
    let adults=[];
    for(let a of people){
        if(a.age>=60)
            adults.push(a.name);
    }
    return adults
}

const people = [
    { name: 'Alice', age: 69 },
    { name: 'Bob', age: 47 },
    { name: 'Charlie', age: 70 },
   ]
   console.log(getNamesOfAdults(people)) // Output: ["Alice", "Charlie"]
   