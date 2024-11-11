const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
    ]
    // Your code here
  const getProducts=(productData,price)=>productData.filter( product=>product.price>price )



    console.log(getProducts(productData, 40))
    // Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]