console.log(`              ***** TCS Interview Eligibility *****`);

var iseligible=function(gradScore,hscScore,sscScore,candidateName){

    if(gradScore>=70 ||hscScore>=80 ||sscScore>90){
        console.log(`Congrates!!! " ${candidateName} " you are eligible for TCS Interview`);
    }
    else{
       console.log(`Unfortunately " ${candidateName} " you are not eligible for TCS Interview`);
    }
    
}

iseligible(80,86,90,"Snehankita Kakade");
iseligible(70,65,55,"Anuradha Kate");
iseligible(60,79,88,"Shradha Supekar");
console.log(`*************************************************************************`);
