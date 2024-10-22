const employeeData = [
    {name: "ram", dept: "marketer"},
    {name: "Radha", dept: "SDE"},
    {name: "shyam", dept: "finance professional"},
    ]
    // Your code here
const greetEmployeeMessages=
employeeData.map(emp=>`Hi ${emp.name} we are gald to have you as ${emp.dept}`)


    console.log(greetEmployeeMessages);
    // Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha w