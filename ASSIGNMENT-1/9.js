// Your ES6 code here
const areStringsEqual=(str1,str2)=>{
    return (str1===str2)
}
console.log(areStringsEqual('Apple', 'Apple')) // true
console.log(areStringsEqual('Apple', 'apple')) // false
console.log(areStringsEqual('Papaya', 'Watermelon')) // false
