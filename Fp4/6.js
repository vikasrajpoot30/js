const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']
// Your code here

const longestString=(strings)=>strings.reduce((acc,string)=>string.length>acc.length?string:acc)
console.log(longestString(strings))
// Output: 'Haule Haule'
