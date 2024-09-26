// Your ES6 code here
const getCarDetails=(car)=>{
    const {make,model,year}=car;
    return {make,model,year};
}
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015,
    color: 'gray',
   }
   console.log(getCarDetails(car)) // "Make: Toyota, Model: Corolla, Year: 2015"