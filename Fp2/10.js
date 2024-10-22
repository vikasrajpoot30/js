const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
   ];

   // Your code here
const findStudent=students=>students.find(student=>student.grade==='A'|| student.scholarship)


   const student = findStudent(students);
   console.log(student);
   // Output: { name: "Mary", grade: "B", scholarship: true 