

// Your ES6 code here
const printData=(userData)=>{
    const {name, country}=userData;

    return name+" lives in "+country;
}


const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
   }
   console.log(printData(userData1)) // Gaurav lives in Japan
   const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
   }
   console.log(printData(userData2)) // Pritam lives in Indi