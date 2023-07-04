


function factorialOfNum(num){
    let factorial=1;
    if(num==null || num==undefined || num==NaN ){
        console.log(`Factorial of ${num}                   ==> Invalid Input`);
    }
    else{
        if(num==0){
            console.log(`Factorial of ${num}                      ==> 1`);
        }
        else{
            for(let index = num; index >= 1; index--){
        
                factorial = factorial * index;
                
                
            }
           
            return factorial;
        }                  
    }
    
    
}


console.log(`Factorial of 5                      ==>${factorialOfNum(5)}`);
console.log(`Factorial of 3                      ==>${factorialOfNum(3)}`);
factorialOfNum(null);
console.log(`Factorial of 8                      ==>${factorialOfNum(8)}`);
factorialOfNum(undefined);
console.log(`Factorial of 9                      ==>${factorialOfNum(9)}`);
factorialOfNum(0);
