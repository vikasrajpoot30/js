const fruits = [
    'apple',
    'banana',
    'banana',
    'cherry',
    'apple',
    'apple',
    'banana',
   ]
   // Your code here
   const countStrings=(fruits)=>fruits.reduce( (acc,fruit)=> {
    acc[fruit]=(acc[fruit]||0)+1
    return acc
   } ,{}  );
   console.log(countStrings(fruits))
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 