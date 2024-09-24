function isSportsCar(car){
    return car.horsepower>=300;
    
}
const car1={make:'porsche',model:'911',horsepower:450};
const car2={make:'Toyota',model:'camry',horsepower:200};
console.log(isSportsCar(car1));
console.log(isSportsCar(car2));

