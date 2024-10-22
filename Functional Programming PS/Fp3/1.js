const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
   ]
   // Your code here
    const findToyotaCar=cars=>cars.filter(car=>car.make==='Toyota'&& car.year>2010)

   const toyotaCar = findToyotaCar(cars)
   console.log(toyotaCar)
   // Output: { make: "Toyota", model: "Camry", year: 2015 }
   