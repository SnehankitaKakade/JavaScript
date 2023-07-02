function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`${monthNumber} -- January`);

      break;

    case 2:
      console.log(`${monthNumber} -- February`);

      break;

    case 3:
      console.log(`${monthNumber} -- March`);

      break;

    case 4:
      console.log(`${monthNumber} --  April`);

      break;

    case 5:
      console.log(`${monthNumber} -- May`);

      break;

    case 6:
      console.log(`${monthNumber} -- June`);
      break;

    case 7:
      console.log(`${monthNumber} -- July`);
      break;

    case 8:
      console.log(`${monthNumber} -- August`);
      break;

    case 9:
      console.log(`${monthNumber} -- September`);
      break;

    case 10:
      console.log(`${monthNumber} -- October`);
      break;

    case 11:
      console.log(`${monthNumber} -- November`);
      break;

    case 12:
      console.log(`${monthNumber} -- December`);
      break;

    default:
      console.log(`${monthNumber} -- Invalid input`);

      break;
  }
}

console.log("---------------------------------");
monthOfYear(0);
console.log();
monthOfYear(2) ;
console.log();
monthOfYear(5); 
console.log();
monthOfYear(12);
console.log();
monthOfYear(15) ;
console.log();
monthOfYear(100);
console.log();
monthOfYear(null); 
console.log();
monthOfYear(undefined); 
console.log("---------------------------------");
