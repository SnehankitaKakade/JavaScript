const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];
console.log(`# SGiven Array :\n\t${arrayNumbers}`);

console.log(`1) Add 10 into each element and log new array result on console`);
const newArray = arrayNumbers.map((element)=>{
        return element+10;
});
console.log(`   `,newArray);

console.log(`2) Square the each array element and log on console `);

const squareArray = arrayNumbers.map((element)=>{
    return element*element;
});
console.log(`   `,squareArray);
console.log(`3) Add the index value into its corresponding each array element and log new array result on console`);
const indexPlusArray = arrayNumbers.map((element,index)=>{
    return element + index;
});
console.log(`   `,indexPlusArray);

