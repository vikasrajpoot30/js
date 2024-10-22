const products = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
   ]
  // Your code here
  const findElectronicsProduct=products=>products.find(product=>product.category==='electronics')
const electronicsProduct = findElectronicsProduct(products)
console.log(electronicsProduct)
// Output: { name: "iPad", price: 799, category: "electronics" } 