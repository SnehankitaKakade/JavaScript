
console.log(
  "1) Count the total no of vowels including small and capital vowels : "
);
var str = "I am very good IT developer";
var count = 0;

for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index); //

  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    count++;
  }
}
console.log(`String ==>" I am very good IT developer"   count =>${count}`);
console.log(`-------------------------------------------------------------`);

console.log(
  `2) Write a function to get the sum of cube of numbers from 1 to 5  eg.1*1*1 + 2*2*2 + 3*3*3 +4*4*4 + 5*5*5`
);


function sum() {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    let cube = i * i * i;
    sum = sum + cube;
  }
  console.log(`Sum =>${sum}`);
}
sum();
console.log(`-------------------------------------------------------------`);

console.log(
  `3) Write function oddPositionedChars()  Log only odd positioned chars on console and do not consider empty spaces. Invoke  function for given string1 and string2`
);
console.log();


let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

function oddPositionedChars(str) {
  for (let j = 0; j < str.length; j++) {
    if (j % 2 != 0) {
        if(str.charAt(j)==" "){
            continue;
        }
      console.log(`char => ${str.charAt(j) } at index[${j}]`);
    }
  }
}
console.log(`string1 => "Hard work always pays back"`);
oddPositionedChars(string1);
console.log(`-------------------------------------------------------------`);
console.log(`string2 => "Soon I will be Angular IT Champ"`);

oddPositionedChars(string2);
console.log(`-------------------------------------------------------------`);
