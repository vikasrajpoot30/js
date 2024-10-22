// Your ES6+ code here
const incrementSalaryAndPromoteSenior=(employees)=>employees.map(
    emp=>{
        emp.salary=emp.salary+1000;
        if(emp.workExperience>=3){
            emp.isSenior=true;
        }
        return emp;
    })



const employees = [
    { name: 'Raju', salary: 1500, role: 'dev', workExperience: 3 },
    { name: 'Aakash', salary: 2000, role: 'dev', workExperience: 3 },
    { name: 'Dinesh', salary: 2000, role: 'dev', workExperience: 2.5 },
    { name: 'Mohan', salary: 2000, role: 'dev', workExperience: 2 },
    { name: 'Ramesh', salary: 3070, role: 'pm', workExperience: 3 },
    { name: 'Jiten', salary: 4800, role: 'qa', workExperience: 3 },
   ]
   console.log(incrementSalaryAndPromoteSenior(employees))
   // Output: [
   // { name: "Raju", salary: 2500, role: "dev", workExperience: 3, isSenior: true },
   // { name: "Aakash", salary: 3000, role: "dev", workExperience: 3, isSenior: true },
   // { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
   // { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
   // { name: "Ramesh", salary: 4070, role: "pm", workExperience: 3, isSenior: true },
   // { name: "Jiten", salary: 5800, role: "qa", workExperience: 3, isSenior: true }
   // ]