const numbers = [1, 2, 3, 4, 5]
// Your code here
const product=(numbers)=>numbers.reduce((total,number)=>total*number,1)
console.log(product(numbers))
