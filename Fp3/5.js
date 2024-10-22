const students = [
    { name: 'Alice', age: 16, grade: 90 },
    { name: 'Bob', age: 17, grade: 80 },
    { name: 'Charlie', age: 15, grade: 95 },
    { name: 'David', age: 16, grade: 85 },
   ]
   
   const filterStudentsByGrade=(array,grade)=>array.filter(student=>student.grade>grade)

   


   const highGradeStudents = filterStudentsByGrade(students, 85)
   console.log(highGradeStudents)
   // OutpFut: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95


   