
console.log(`*******************************************************`);
var greaterNunmber=function(num1,num2){
    var result=num1>num2?`${num1} is greater`:`${num2} is greater`;
    console.log(`Greater no in (${num1} & ${num2}): `,result);
}
greaterNunmber(10,-10);
greaterNunmber(800,899);
console.log(`*******************************************************`);


var isEvenOrOddNum=function(num){
    var result1=num%2==0?true:false;
    return result1;
}
var result=isEvenOrOddNum(29);
var res=result?`29 is Even`:`29 is Odd`;
console.log(`${res}`);

var result=isEvenOrOddNum(44);
var res=result?`44 is Even`:`44 is Odd`;
console.log(`${res}`);

var result=isEvenOrOddNum(0);
var res=result?`0 is Even`:`0 is Odd`;
console.log(`${res}`);

var result=isEvenOrOddNum(101);
var res=result?`101 is Even`:`101 is Odd`;
console.log(`${res}`);
console.log(`*******************************************************`);

var wordLength=function(str){
    var len=str.length;
var res=len%2==0?`"${str}" is Even wordlength`:`"${str}" is Odd wordlength` ;
return res;
}
console.log(wordLength("JavaScript"));
console.log(wordLength("developer"));
console.log(wordLength("Google"));
console.log(`*******************************************************`);