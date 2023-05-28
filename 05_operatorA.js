console.log("********************************************************");

var squareOfWordLength=function(str){
    var length=str.length;
    console.log(`String Length is : ${length}`);
    return length * length;
}
var result = squareOfWordLength(`JavaScript`);
console.log(`String Length Square is  : ${result}`);

var result1=squareOfWordLength(`Google Chrome`);
console.log(`String Length Square is : ${result1}`);

var result2=squareOfWordLength(`Developer Smart`);
console.log(`String Length Square is : ${result2}`);

console.log("********************************************************");
function sample(){
    var givenString="I am Angular Developer";
    var strLength=givenString.length;
    var totalWords=givenString.split(" ");
    var wordsCount=totalWords.length;

    var divisionResult=strLength / wordsCount;
    var multiplicationResult=strLength * wordsCount;
    console.log(`Given String is : ${givenString}`);
    console.log(`Length of Given String is : ${strLength}`);
    console.log(`No of words : ${wordsCount}`);
    console.log(`String length / No of words = ${divisionResult}`);
    console.log(`String length * No of words = ${multiplicationResult}`);

}
sample();
console.log("********************************************************");
