const products = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
   ]
   // Your code here
   const getAllElectronicProducts=array=>array.filter(productInArray=>productInArray.category==='electronics')
   const electronicProducts = getAllElectronicProducts(products)
   console.log(electronicProducts)
   // Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch",