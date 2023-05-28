console.log("******************************************************************************************************************************************************************************");

var square=function (num){
    console.log(`Square of ${num} is : `,num *num);
}
square(5);
square(6);
square(25);
square(100);
console.log("******************************************************************************************************************************************************************************");

console.log(`Type of function(num) : `, typeof  square);
console.log("******************************************************************************************************************************************************************************");

var areaOfRectangle=function (length,width){
    console.log(`Area of Rectangle having length - ${length}  & width - ${width} is : `,length * width);
}
areaOfRectangle(499,917);
console.log("******************************************************************************************************************************************************************************");

var swapValues=function (num1,num2){
    console.log(`Values Before Swap : `,num1,num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log(`Values After Swap : `,num1,num2);
}
swapValues("Virat","Anushka");
swapValues("1000","2000");
console.log("******************************************************************************************************************************************************************************");

var str ="JS the most popular language of internet";
console.log(`Given String is : ${str}`);

var totalChar= str.split("");
console.log(`Total character available in given string  are :`,totalChar);

var str ="JS the most popular language of internet";

console.log("character at index 6 is : ", str.charAt(6));

console.log(`character at index 11 is : `, str.charAt(11));

console.log(`last character from string : `, str.charAt(str.length));

console.log(`first character from string  : `, str.charAt(0));

var totalNoOfWords=str.split(" ");
console.log("Total no of words of given string : ",totalNoOfWords.length,"\n","Square of total no of words in given string : ",totalNoOfWords.length*totalNoOfWords.length);


console.log("******************************************************************************************************************************************************************************");


