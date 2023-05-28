const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`********************************************************************************************`);

//Display Given Array
console.log(`# Given Array...`);
console.log(arrayNumbers);
console.log(`********************************************************************************************`);

//find the total elements available or length and log on console
let lengthOfArray=arrayNumbers.length;
console.log(`# Length of arrayNumbers ==>${lengthOfArray}`);
console.log(`********************************************************************************************`);

//first element
console.log(`# First element of arrayNumbers ==> ${arrayNumbers[0]}`);
console.log(`********************************************************************************************`);

//last element
console.log(`# Last element of arrayNumbers ==> ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`********************************************************************************************`);

//Third last element
console.log(`# Third last element of arrayNumbers ==> ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`********************************************************************************************`);

//All Even numbers using for in loop 
console.log(`# All Even numbers using for in loop `);
for(const index in arrayNumbers){
    if(arrayNumbers[index]%2==0)
    {
        console.log(arrayNumbers[index]);
    }
}
console.log(`********************************************************************************************`);


//All Odd numbers using for in loop 
console.log(`# All Odd numbers using for in loop `);
for(const index in arrayNumbers){
    if(arrayNumbers[index]%2==1)
    {
        console.log(arrayNumbers[index]);
    }
}

console.log(`********************************************************************************************`);


//All Even Positioned elements from arrayNumbers
console.log(`All Even Positioned elements from arrayNumbers`);
for(let index=0; index<arrayNumbers.length; index++)
{
    if(index%2==0){
        console.log(`index : ${index}       Element : ${arrayNumbers[index]}`);
    }
}
console.log(`********************************************************************************************`);



//All Odd Positioned elements from arrayNumbers
console.log(`All Odd Positioned elements from arrayNumbers`);
for(let index=0; index<arrayNumbers.length; index++)
{
    if(index%2==1){
        console.log(`index : ${index}       Element : ${arrayNumbers[index]}`);
    }
}
console.log(`********************************************************************************************`);



//Sum of All elements  from arrayNumbers

let sum=0;
for(let index=0; index<arrayNumbers.length; index++)
{
sum=sum+arrayNumbers[index];
}
console.log(`# Sum of All elements  from arrayNumbers ==>${sum}`);
console.log(`********************************************************************************************`);


//# Multiples of 5 
console.log(`# Multiples of 5  `);
for(let index=0; index<arrayNumbers.length; index++)
{
    if(arrayNumbers[index]%5==0){
       
        console.log(`               ==>${arrayNumbers[index]}`);
    }
}
console.log(`********************************************************************************************`);

// is number 115 available in arrayNumbers
let isNoPresent=arrayNumbers.includes(115);
console.log(`# is number 115 available in arrayNumbers ==> ${isNoPresent}`);
console.log(`********************************************************************************************`);



// is number 23 available in arrayNumbers
let isNoAvailable=arrayNumbers.includes(23);
console.log(`# is number 115 available in arrayNumbers ==> ${isNoAvailable}`);
console.log(`********************************************************************************************`);

//insert numbers
console.log(`# arrayNumbers after inserting elements`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`********************************************************************************************`);

//Delete 3 elements starting from index 4
console.log(`# arrayNumbers after inserting elements`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);
console.log(`********************************************************************************************`);

