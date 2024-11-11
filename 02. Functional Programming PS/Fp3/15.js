const numbers = [10, 5, 8, 3, 6]
// Your code here
const getMinimumNumber=(numbers)=>
    {
        return numbers.reduce((min,number)=>(min>number?number:min) )

    }
console.log(getMinimumNumber(numbers))
// Output: 