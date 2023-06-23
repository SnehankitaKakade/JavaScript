function isPalindrome(str){

    const strReverse=[];

    for(i=str.length-1;i>=0;i--){

        strReverse.push(str[i]);
    }
/*    to reverse string another way 

    1) split the given string
        const splitarray = str.split("");
    2) reverse the splited string 
        const reversedArray=splitarray.reverse();
    3) use reduce method to reduce string array to string

    */
    //console.log(strReverse);
    const newString = strReverse.reduce((runningtotal,value)=>{
        return runningtotal+value;
    });
    
   // console.log(newString);
    if(str==newString){
        console.log(`Given string => ${str} is palindrome`);
    }
    else{
        console.log(`Given string => ${str} is not palindrome`);
    }
}

isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");