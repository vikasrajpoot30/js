
person= { name: 'Amit', age: 25, occupation: 'Software Engineer' }

function changeOccupation(str,abc){
    str.occupation=abc;
}



console.log(person) // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to
changeOccupation(person, 'Product Manager')
console.log(person) // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } t