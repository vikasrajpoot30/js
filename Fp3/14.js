const strings = ['Hello', ' ', 'world', '!']
// Your code here

const concatenateStrings=(strings)=>strings.reduce((acc,string)=>acc+string,"");


console.log(concatenateStrings(strings))
// Output: "Hello world!"
