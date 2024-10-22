// Your ES6 function here
function combineObjects(obj1,obj2){
    return {...obj1,...obj2};
}


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinedObj = combineObjects(obj1, obj2)
console.log(combinedObj)
// Expected Output: {a: 1, b: 2, c: 3, d: 