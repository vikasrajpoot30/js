const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
   ]
   // Your code here
   const getMaleCustomers=(customers)=>customers.filter(customer=>customer.gender==='Male')
   const maleCustomers = getMaleCustomers(customers)
   console.log(maleCustomers)
   // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender