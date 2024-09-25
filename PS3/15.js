// Your ES6 code here
const printProductDetails=(product)=>{
    const { name, specification:{size} }=product;
    return name+" which is of "+size;

}
const product = {
    name: 'Apple MacBook Air 2020',
    specification: {
    capacity: '256GB',
    size: '13.3 Inch',
    },
    price: 82900,
   }
   console.log(printProductDetails(product)) // Apple MacBook Air 2020 which is of 13.3 I