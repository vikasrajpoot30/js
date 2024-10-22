const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
 { make: 'Toyota', model: 'Camry', year: 2015 },
 { make: 'Ford', model: 'Mustang', year: 2018 },
]
 const getCarModel=(arrayContainingObjects)=>arrayContainingObjects.filter(object=>object.year>2012).map(object=>object.model)



const carModels = getCarModel(cars)
console.log(carModels)
// Output: ["Camry", "Mustang"