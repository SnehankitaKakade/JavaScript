console.log(`**************************************************`);
 var voteEligibility=function(age){
    if(age==null || age==undefined){
        //Invalid Data
        console.log(`Age: ${age} --> In valid data`);
    }
    else{
         //Valid Data 
        if(age>120 || age<=0){
        console.log(`Age: ${age} --> In valid data`); 
         }       
        else{
            if(age<18){
                console.log(`Age: ${age} --> you are not eligible for voting`);
            }
            else{
                console.log(`Age: ${age} --> you are eligible for voting`);
            }
            
            
            

        }
    }
    console.log(`**************************************************`);
    // if(age<0 || age>120 || age==0)          // this code also valid
    // {
    //     console.log(`In valid data`);
    // }
    // else{
    //     console.log(`He or She is eligible for voting`);
    // }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
 
