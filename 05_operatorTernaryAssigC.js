console.log(`************************************************************`);
console.log(`*******Male Marriage Eligibility Check*******`);
var maleMarriageEligibility=function(gender,age,boyName){

    var result=gender=="male" && age>=21?`Hey ${boyName} you are eligible for marraige`:`Hey ${boyName} you are not eligible for marraige`;
    return result;
}
var res=maleMarriageEligibility("male",25,"Billgates");
console.log(res);
var res=maleMarriageEligibility("male",17,"Stew Jobs");
console.log(res);
console.log(`************************************************************`);
console.log(`*******Female Marriage Eligibility Check*******`);
var femaleMarriageEligibility=function(gender,age,girlName){

    var result=gender=="female" && age>=18?`Hey ${girlName} you are eligible for marraige`:`Hey ${girlName} you are not eligible for marraige`;
    return result;
}
var res=femaleMarriageEligibility("female",16,"Jenifer");
console.log(res);
var res=femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(res);
console.log(`************************************************************`);