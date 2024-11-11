const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
// Your code here
const totalLength=(strings)=>strings.reduce((total,string)=>total+string.length,0);


console.log(totalLength(strings))
// Output: 30