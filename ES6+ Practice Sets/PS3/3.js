function findPerson(person,target){
    // we have to check if this person is in array or not 
    const length=person.length;
    for(var i=0;i<length;i=i+1){
      if(person[i].name==target)
        return person[i];
    }
    return null;

}
// Your ES6 code here
console.log(
    findPerson(
    [
    { name: 'Amay', age: 25 },
    { name: 'Akhil', age: 25 },
    ],
    'Akhil',
    ),
   )
   

