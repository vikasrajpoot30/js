// Your ES6+ code here
const filterProducts=(products)=>products.filter(product=>product.name.length>5 && product.quantity>10).map(product=>product.name)
const products = [
    { name: 'Bread', price: 150, quantity: 20 },
    { name: 'Hoodie', price: 200, quantity: 50 },
    { name: 'Pyjama', price: 307, quantity: 10 },
    { name: 'Slipper', price: 480, quantity: 30 },
   ]
   console.log(filterProducts(products)) // Output: ["Hoodie", "Slipper"]