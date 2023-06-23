const array=[ 10,5,'a','b','h',11];
console.log("Given Array : ",array);
const number=[];
const alphabets=[];

const num=1;
    for(i=0;i<array.length;i++){
        if((typeof array[i])=== typeof num){
            
            number.push(array[i]);
        }
        else{
            alphabets.push(array[i]);
        } 
    
        }
        number.sort( (n1, n2) => {
            return n1 > n2 ? 1 : -1 ;
         } );
        alphabets.sort();

    console.log("Number Array : ",number);
    console.log("Alphabet Array : ",alphabets);