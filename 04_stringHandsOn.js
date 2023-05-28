console.log("*************************************************************************************************************");
var givenString=`   Hey you are doing good,keep it up    `;

function stringHandsOn(){
    console.log(`Given String :${givenString}`);
    console.log(`Length of Given String : `,givenString.length);
    var strtrim = givenString.trim();
    console.log(`Given String After Trim : `,strtrim ,`\t`,`Trimmed  String Length : `,strtrim.length);
    console.log(`Removed extra spaces count : `,givenString.length-strtrim.length);
    console.log(`First & last character after Trim : `, `First_char : `,strtrim.charAt(0), `\t`,`Last_char : `,strtrim.charAt(strtrim.length-1) );
    
    var countOfTotalWords=givenString.split(" ");
    console.log(countOfTotalWords);
    console.log(`Count of total words available in string : `,countOfTotalWords.length);
    console.log(`Index of string "good" : `,givenString.indexOf("good"));

    console.log(`SubString starting from 22 index using subString(): `,givenString.substring(22));

    console.log(`SubString starting from 22 index using slice(): `,givenString.slice(22));

    console.log(` Is string ends with word "up" : `,strtrim.endsWith("up"));

    console.log(`Is string starts with word "Hey": `,strtrim.startsWith("Hey"));


}
stringHandsOn();
console.log("*************************************************************************************************************");