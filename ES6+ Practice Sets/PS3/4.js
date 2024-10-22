function pickFirstAndSecond(array){
 const [first,second]=array;

 return {first,second};
}


console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// {first: 'orange', second: 'banana'}