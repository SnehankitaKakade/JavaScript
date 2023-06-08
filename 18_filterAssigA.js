console.log(`----------------------------------------------------------------`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`arrayNumbers = ${arrayNumbers}`);
console.log(`----------------------------------------------------------------`);

console.log(`1) Find out all the numbers which are greater than 50 & log on console`);
const arr=arrayNumbers.filter((element)=>{
  return element>50;
});
console.log(`   numbers which are greater than 50 = ${arr}`);
console.log(`----------------------------------------------------------------`);

console.log(`2) Find out all the Even numbers & log on console`);
const arrayEven=arrayNumbers.filter((element)=>{
  return element%2==0});
console.log(`   all the Even numbers = ${arrayEven}`);
console.log(`----------------------------------------------------------------`);

console.log(`3) Find out all the odd numbers & log on console`);

const arrayOdd=arrayNumbers.filter((element)=>{
  return element%2==1});
console.log(`   all the odd numbers = ${arrayOdd}`);

console.log(`----------------------------------------------------------------`);

console.log(`4) Find out all the numbers which are multiple of 5`);

const arrayMul=arrayNumbers.filter((element)=>{
  return element%5==0});
console.log(`   multiple of 5 = ${arrayMul}`);
console.log(`----------------------------------------------------------------`);
console.log(`5) Find out all numbers which are between 20 and 50`);

const arrayNo=arrayNumbers.filter((element)=>{
  return element>20 && element<50});
console.log(`   all numbers which are between 20 and 50 = ${arrayNo}`);
console.log(`----------------------------------------------------------------`);