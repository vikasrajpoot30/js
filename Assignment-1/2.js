const sumDigitsAtOddIndices=(arr)=>
{
  let sum=0;
  for(let i =1; i<arr.length;i=i+2){
   sum+=arr[i];
  }
  return sum
}
console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])) // 20


