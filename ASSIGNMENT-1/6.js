const getCoordinates=(point)=>{
     const {x,y}=point;
     const arr=[x,y];
     return arr;

}


const point = { x: 5, y: 10 }
console.log(getCoordinates(point)) //