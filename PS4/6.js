const getValues=(obj,property)=>{

const array=[];
for(const i of obj){
    array.push(i[property])
}
return array;
}


console.log(
    getValues(   
[
    { name: 'John', age: 21 },
    { name: 'Mary', age: 22 },
    { name: 'Peter', age: 23 },
    ],
    'name',
    ),
   ) // ["John", "Mary", "Peter"]