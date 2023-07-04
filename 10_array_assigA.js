console.log(`*******************************************************************************`);
console.log("# Given Array ==> ");
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
console.log(`*******************************************************************************`);
//first element
console.log(`"First element of arrayFruits "= ${arrayFruits[0]}`);
console.log(`*******************************************************************************`);

//last element
console.log(`"Last element of arrayFruits "= ${arrayFruits[arrayFruits.length-1]}`);
console.log(`*******************************************************************************`);

//add element "Papaya" before element "Banana" or add element at start
console.log(`# arrayFruits after adding  element "Papaya" before element "Banana" ==> `);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`*******************************************************************************`);


//remove element "Mango" from array
console.log(`# arrayFruits after removing  element "Mango"  ==> `);
arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`*******************************************************************************`);


//add element "Pineapple" at last position
console.log(`# arrayFruits after adding  element "Pineapple" at last position ==> `);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`*******************************************************************************`);

//insert element "Dragon Fruit" before "Water Melon"
console.log(`# arrayFruits after inserting element "Dragon Fruit" before "Water Melon" ==> `);
arrayFruits.splice(arrayFruits.length-2,0,"Dragon Fruit");
console.log(arrayFruits);
console.log(`*******************************************************************************`);

//replace element "Orange" with "Kiwi"
console.log(`# arrayFruits after replacing element "Orange" with "Kiwi" ==> `);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log(`*******************************************************************************`);

// log the elements starting from index 1 to 4 
console.log(`# arrayFruits: elements starting from index 1 to 4 ==> `);
const arraySlice=arrayFruits.slice(1,5);
console.log(arraySlice);
console.log(`*******************************************************************************`);

// //Only select last 3 elements & log on console : use the length property
console.log(`# Selecting last 3 element  using length property ==> `);
console.log(`Array =>`,arrayFruits);
const lastThreeElement=arrayFruits.slice(arrayFruits.length-3);              //imp method to select last 3 element
console.log(lastThreeElement);
console.log(`*******************************************************************************`);

