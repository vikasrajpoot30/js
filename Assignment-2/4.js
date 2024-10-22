// your ES6+ code here
const filterBySalary=(employees)=>employees.filter(emp=>emp.salary%2==0).map(emp=>emp.name)
const employees = [
    { name: 'Raju', salary: 154, role: 'dev' },
    { name: 'Aakash', salary: 200, role: 'dev' },
    { name: 'Ramesh', salary: 3077, role: 'pm' },
    { name: 'Jiten', salary: 487, role: 'qa' },
   ]
   console.log(filterBySalary(employees)) // Output: ["Raju", "Aakash"]
   