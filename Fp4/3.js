const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
   ]
   // Your code here
   const totalValue=(items)=>items.reduce((total,item)=>total+item.price,0)
   console.log(totalValue(items))
   // Output: 60