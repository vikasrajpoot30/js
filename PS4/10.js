
const sumOfAges=array=>{
    var sum=0;
    for(const a of array){
       sum +=a.age;
    }
    return sum;
}

var array = [
    {
    name: 'Jay',
   
age: 60,
},
{
name: 'Gloria',
age: 36,
},
{
name: 'Manny',
age: 16,
},
{
name: 'Joe',
age: 9,
},
]
console.log(sumOfAges(array)) // 121
