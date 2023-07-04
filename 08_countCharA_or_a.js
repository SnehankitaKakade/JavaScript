

const string1="I AM Learning JavaScript, The Language Of internet";
const string2="My Favourite movie is LAggAn";

function countCharA(str){

    let count=0;
    const array=str.split("");

    for(let i=0;i<array.length;i++){
        if(array[i]=='a' || array[i]=='A'){
            count++;
        }
    }
    console.log(`Count of A or a ==> ${count}`);
}
console.log(`String1 ==> ${string1}`);
countCharA(string1);
console.log(`String2 ==> ${string2}`);
countCharA(string2);
