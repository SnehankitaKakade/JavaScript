const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

console.log(`1) Log the array element with its index using forEach() with arrow function`);
arrayNumbers.forEach((element,index)=>{
console.log(`   Element: ${element} Index : ${index}`);
});



console.log(`2) Find the positive element in array & log using forEach() with arrow function`);
let positiveArray=[];
arrayNumbers.forEach((element,index)=>{
    if(element>0)
    {
        positiveArray.push(element);       
    }
     });
     console.log(`   Positive Elements : ${positiveArray}`);

console.log(`3) Find the negative numbers and add into new array & log  new array on console using arrow function`);
     let negativeArray =[];
     arrayNumbers.forEach((element,index)=>{
        if(element<0)
        {
            negativeArray.push(element);  
        }
         });

       //  newArray.forEach( element =>  console.log(element) );          // log new array using arrow function
       console.log(`   Negative Elements : ${negativeArray}`);

        
    console.log(`4) Find the even numbers and log on console using forEach() with arrow function`);
         let EvenArray=[];
        arrayNumbers.forEach((element,index)=>{
            if(element%2==0)
            {
                EvenArray.push(element);  

            }
             });

             console.log(`   Even Elements : ${EvenArray}`);


    console.log(`5) Find the sum of all elements from arrayNumbers and log on sum value on console`);
             let sum=0;
             arrayNumbers.forEach((element,index)=>{
               sum=sum+element;
                 });
                 console.log(`  Sum of all elements From arrayNumbers : ${sum} `);

    console.log(`6) log the even indexed array value on console using forEach() with arrow function`);
        arrayNumbers.forEach((element,index)=>{
        if(index%2==0){
            console.log(`   Index : ${index} Element: ${element} `);
        }
          });


