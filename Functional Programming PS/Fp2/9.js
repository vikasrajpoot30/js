const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
   ];
   const findStudentWithGradeA=students=>students.filter(student=>student.grade==='A')
   const studentWithGradeA = findStudentWithGradeA(students);

   console.log(studentWithGradeA);

// Output: { name: "Mary", grade: "A" 