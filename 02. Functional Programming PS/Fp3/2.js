const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
   ]
   // Your code here
   const getCarDetails=cars=>cars.filter(car=>car.year>2012)
   const getCars = getCarDetails(cars)
   console.log(getCars)
   // Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Must