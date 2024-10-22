const filterByKeyword=(products)=>products.filter
(product=>product.name.includes('Bread')).map(product=>product.name)

const products = [
    { name: 'Bread', price: 480, quantity: 3 },
    { name: 'Clips', price: 200, quantity: 5 },
    { name: 'green Bread Knife', price: 3077, quantity: 1 },
    { name: 'Slipper', price: 150, quantity: 2 },
   ]
   console.log(filterByKeyword(products))
   // Output: ["Bread", "green Bread Knife"]