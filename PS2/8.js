// function getData(person) {
//     const name = person.name
//     const address = person.address.city
//     console.log(name) // John Doe
//     console.log(address) // New York
//    }

   const  getData=(person)=>
   {
    const {name , address:{city}}=person;
    console.log(`Name: ${name}`);
    console.log(`City: ${city}` );

   };

   const person = {
    name: 'John Doe',
    address: {
    city: 'New York',
    state: 'NY',
    },
   }
   getData(person);

   