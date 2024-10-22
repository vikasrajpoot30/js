const products = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
   ]
   // Your code here
   const getTotalCost=(products)=>
    products.reduce( (acc,product)=>acc+(product.price)*(product.quantity) ,0);
   
   console.log(getTotalCost(products))
   // Output: 150
   