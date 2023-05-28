console.log("***********************************************************************************************");

var hobby1="Programming";
var hobby2="Reading";
var hobby3="Travelling";

function stringBasics(){
    console.log("My Dream Company is : 'TCS' ");
    console.log("My Hobbies are:",hobby1,",",hobby2,",",hobby3);
    console.log("Sum of All Characters in Hobby1,Hobby2 & Hobby3  :  ",hobby1.length+hobby2.length+hobby3.length);
}

stringBasics();
console.log("***********************************************************************************************");

var givenString="   Hey you are doing good,keep it up    ";

function stringHandsOn(){
    console.log("Given String : ",givenString);
    console.log("Length of Given String : ",givenString.length);
    var strtrim = givenString.trim();
    console.log("Given String After Trim : ",strtrim ,"\t","Trimmed  String Length : ",strtrim.length);
    console.log("Removed extra spaces count : ",givenString.length-strtrim.length);
    console.log("First & last character after Trim : ", "First_char : ",strtrim.charAt(0), "\t","Last_char : ",strtrim.charAt(strtrim.length-1) );

}
stringHandsOn();
console.log("***********************************************************************************************");