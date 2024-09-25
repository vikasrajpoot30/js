
function getAddress(user){
    const {postalCode,city}=user;

    return {postalCode,city};

}



const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
   }
   console.log(getAddress(userData))
   // {postalCode: '12134', city: 'Germany'}