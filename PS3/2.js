function  formatProduct (product){
    const cost=product.price;
    const name= product.name;
    const available=product.inStock;
    if(available){
        return name+" costs INR "+cost+" and is in stock";
    }
    else 
    return name+" costs INR "+cost+" and is not in stock";
}


const product={
    name:'Socks',price:249,inStock:true,
}
const product2={
    name:'Pencils',price:29,inStock:false,
}
const message=formatProduct(product2);
console.log(message);