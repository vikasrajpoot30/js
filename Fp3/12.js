const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
   ]
 // Your code here
 const average=(students,currValue)=>students.score+currValue;
 const getAverageScore=(students)=>{
    let totalScore= students.reduce((acc,student)=>acc+student.score,0) ;
    return totalScore/students.length;
 }
console.log(getAverageScore(students))
// Output: 82.5
  