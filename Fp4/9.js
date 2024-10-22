
const products = [
    { name: 'Bread', price: 10, quantity: 2 },
    { name: 'Clips', price: 20, quantity: 5 },
    { name: 'Knife', price: 30, quantity: 1 },
    { name: 'Slipper', price: 40, quantity: 3 },
   ]
   // Your code here
   const findMostExpensiveProduct=(products)=>products.reduce((acc,object)=>
    object.price>acc.price?object:acc)
   console.log(findMostExpensiveProduct(products))
   // { name: "Slipper", price: 40, quantity: 3 }
   

