const getProductNamesInLowerCase=products=>products.map(products=>products.name.toLowerCase());



const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 },
   ]
   console.log(getProductNamesInLowerCase(products))
   


