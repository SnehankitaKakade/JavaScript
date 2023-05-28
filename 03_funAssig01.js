console.log("**************************************************");

function show(){
    console.log("show() with no argument and no return type...");
}
function display(){
    console.log("display() with no argument and no return type...");

}
show();
display();
console.log("**************************************************");

var firstname="Snehankita";
var sirname="kakade";
var clgName="V.J.Shinde College Of Engineering"

function personalDetails(firstName,lastName,collegeName){

    console.log(" FirstName   : ",firstName,"\n","lastName    : ",lastName,"\n","collegeName : ",collegeName);
}
personalDetails(firstname,sirname,clgName);

console.log("**************************************************");

function swapValuesDude(var1,var2){

    console.log("Before Swap.....");
    console.log( " var1  : ",var1,"\n","var2  : ",var2);


    var temp1=var1;
    var1=var2;
    var2=temp1;

    console.log("After Swap.....");
    console.log( "  var1 : ",var1,"\n"," var2 : ",var2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log("**************************************************");
var val1,val2,val3;

function addThreeValues(value1,value2,value3){
    console.log("Before Addition : ");
    console.log(value1,value2,value3);
    console.log("After  Addition : ");

    console.log("-->",value1+value2+value3);
}

addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
console.log("**************************************************");