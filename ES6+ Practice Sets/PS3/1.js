function formatArray(items){
    const noOfItems=items.length;
    const first = items[0];
    const last = items[noOfItems-1];
    return "The array has "+noOfItems+" items, first item is: "+first+" and last item is:"+last;
}


const items=['apple','banana','orange'];
const message=formatArray(items);
console.log(message);