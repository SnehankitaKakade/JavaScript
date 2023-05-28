console.log(`*************************************************************************`);
console.log(`              ***** TCS Interview Eligibility *****`);

var iseligible=function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70 ||hscScore>=80 ||sscScore>90?`Congrates!!! " ${candidateName} " you are eligible for TCS Interview`:`Unfortunately " ${candidateName} " you are not eligible for TCS Interview`;
    return result;
}
var res=iseligible(80,86,90,"Snehankita Kakade");
console.log(res);

var res=iseligible(70,65,55,"Anuradha Kate");
console.log(res);

var res=iseligible(60,79,88,"Shradha Supekar");
console.log(res);
console.log(`*************************************************************************`);
