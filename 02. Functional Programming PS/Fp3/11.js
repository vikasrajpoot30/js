const numbers = [12, 23, 4, 2, 11, 21]
// Your code here
const sumOfEvenNumbers=(numbers)=>numbers.filter(num=>num%2==0).reduce((currentValue,num)=>num+currentValue,0)


console.log(sumOfEvenNumbers(numbers))
// Output: 18
