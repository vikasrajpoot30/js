// Your ES6+ code here

const sumOfEvenNumbers=(numbers)=>numbers.reduce((acc,number)=>number%2==0?acc+number:acc,0)
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])) // 12
console.log(sumOfEvenNumbers([1, 3, 5])) // 0