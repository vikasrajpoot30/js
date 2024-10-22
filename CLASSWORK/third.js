// const birthday=(person)=>({...person,age:person.age+1});
// console.log(birthday({name:'tanvi',age:23}));

// 2.
// const increaseStock=(product)=>({...product, quantity:product.quantity+5});

// const  product= {
//     name:"ruled books",
//     quantity:20
// }
// const inventoryStock= increaseStock(product);
// console.log(inventoryStock);


//3. 


// const colors=["red",'green','blue','yellow','white'];
// const convertColorToColorMessage=color=>`color is:${color}`;

// let colorsMessage= colors.map(convertColorToColorMessage);
// console.log(colorsMessage);


// //  sqrt of a array
// const numbers=[2,4,9,16,25];
// const roots = numbers.map(num=>Math.sqrt(num));
// console.log(roots);


// const square=(numbers)=>numbers.map(num=>num*num)
// const numbers=[1,2,3,4,5,6];
// const squares= square(numbers);
// console.log(squares);


// const strings=['America','Vasco DE gama','portgual','real madrid'];
// write an es6 fn which takes array of an strigns and return lenght of each strign using map mehtod
// const len=str=>str.length;

// const lengthsOfStrings=strings.map(len);
// console.log(lengthsOfStrings);



// FILTER 

// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// const isOdd=num=>(num%2)!=0;

// const oddNumbersOnly= numbers.filter(isOdd);
// console.log(oddNumbersOnly);

// const numbers=[10,20,30,40,23,2,22,45,44,300];

// const isDivisibleByTen=num=>num%10==0;
// const filteredArr= numbers.filter(isDivisibleByTen);
// console.log(filteredArr);

// const numbers=[10,11,12,1,2,3,4,5,55,444,33,2];

// // const isGreaterThanTen=num=>num>10;

// const numbersGreaterThanTen= numbers.filter(num=>num>10);

// console.log(numbersGreaterThanTen);




// const numbers=[1,3,5,7,9,11,13,15,2,22,222,2222];
// const isEvenNumebr=num=>num%2===0;
// const firstEvenNumber= numbers.find(isEvenNumebr);
// console.log(firstEvenNumber);


// const numbers=[1,1,1,1,1];
// const sumOfArr=(accumulator,currentValue,currentIndex)=>accumulator+currentValue;
// const sumOfAll= numbers.reduce(sumOfArr,0);
// console.log(sumOfAll);

// const numbers=[1,2,3,4,5,6,7,8];
// // odd number sum
// const currentSumOfOdds=(currentSumOfOdds,currentNumberFromArray)=>
// currentNumberFromArray%2!=0 ? currentSumOfOdds+currentNumberFromArray : currentSumOfOdds ;

// const sumOfOdd= numbers.reduce(currentSumOfOdds,0);
// console.log(sumOfOdd);




const books=[
    {name:'the alchemist',author:'paolo coehlo',pages:197},
    {name:'to kill a mockingburd',author:'harper lee',pages:281},
    {name:'great gatsby ',author:'F. Scott Fitzgerald',pages:180}
]


const pageSum=(pageSum,currentValue)=>  pageSum + currentValue.pages;


const sumOfPages= books.reduce(pageSum,0);
console.log(sumOfPages);












