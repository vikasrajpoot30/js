const numbers = [1, 2, 3, 4, 5]
// Your code here
const square=(total,currentNumber)=>{
    return total+currentNumber*currentNumber;
}
const sumSquares=(numbers)=>numbers.reduce(square,0)
console.log(sumSquares(numbers))
// Output: 55
