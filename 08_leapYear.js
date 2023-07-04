
let checkLeapYear=function(leapYear){

    //invalid data
    if(leapYear==' '  || leapYear == NaN  || leapYear == undefined){
        console.log(`Year = ${leapYear} ==> Invalid data`);
    }else{
        
        if(leapYear%4==0 || (leapYear%400==0 && leapYear%100==0) ){
           
                console.log(`Given year ${leapYear} is leap year `);

            
        }
        else{
            console.log(`Given year = ${leapYear} ==>  not leap year `);
   
        }
    }

} 
console.log(`----------------------------------`);


checkLeapYear(2020);
console.log(`----------------------------------`);

checkLeapYear(1999);
console.log(`----------------------------------`);

checkLeapYear(1600);
console.log(`----------------------------------`);

checkLeapYear(2022);
console.log(`----------------------------------`);

checkLeapYear(1945);
console.log(`----------------------------------`);

checkLeapYear(null);
console.log(`----------------------------------`);

checkLeapYear("Twenty Twenty");
console.log(`----------------------------------`);

checkLeapYear(undefined);
console.log(`----------------------------------`);

checkLeapYear(NaN);
console.log(`----------------------------------`);

checkLeapYear(1750);
console.log(`----------------------------------`);
