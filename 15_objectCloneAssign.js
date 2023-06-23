console.log(`*************************************************************************************`);

const arrayNums=[20,3,4,56,90,400,49];

console.log(`Given Array : ${arrayNums}`);
console.log(`*************************************************************************************`);

console.log(`1) Performing Shallow Clone ==>`);
let arrayCloned=arrayNums;   //shallow clone

arrayNums.push(55,66);


console.log(` Original Array --> arrayNums : ${arrayNums}`);
console.log(` Cloned Array --> arraycloned : ${arrayCloned}`);
console.log(`*************************************************************************************`);
console.log(`2) Performing Deep Clone ==>`);

 arrayCloned=[...arrayNums];
 arrayNums.push(10,25);

console.log(` Original Array --> arrayNums : ${arrayNums}`);
console.log(` Cloned Array --> arraycloned : ${arrayCloned}`);
console.log(`*************************************************************************************`);
console.log(`3) Performing merge or concate operation on arrayNum & arrayEven`);
const arrayEven=[2,30,14,8];
console.log(`arrayNums : ${arrayNums}`);
console.log(`arrayEven : ${arrayEven}`);
console.log(`Merged array using spread Operator :`);
newArray=[...arrayNums,...arrayEven];                         //     using cancat method newArray=arrayNums.concat(arrayEven);
console.log(newArray);
console.log(`*************************************************************************************`);
console.log(`4) Creating employee_info Object ==>`);

const employee_info = {
    emp_id:27,
    emp_name:"John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202"
        },
        city:"Munbai",
        state:"Maharashtra",
        country:"India",    
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}

console.log(employee_info);
console.log(`*************************************************************************************`);

console.log(`5) Employee Details : `);
console.log(`Adress:Locality ==>`,employee_info.address.locality);
console.log(`City ==>`,employee_info.address.city);
console.log(`State ==>`,employee_info.address.state);
console.log(`Country ==>`,employee_info.address.country);
console.log(`Mobile Number ==>`,employee_info.mobiles);
console.log(`*************************************************************************************`);

console.log(`6) Perform Deep copy using JSON.stringfy()`);
//const deepClonedEmployeeInfo={...employee_info};
const deepClonedEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
console.log(`  deepClonedEmployeeInfo : salary(Before update) ==> `,deepClonedEmployeeInfo.salary.july_month);

deepClonedEmployeeInfo.salary.july_month="80,0000INR";
console.log(`  deepClonedEmployeeInfo : salary(After update) ==> `,deepClonedEmployeeInfo.salary.july_month);

console.log(`  employee_info : country(Before update)==> `,employee_info.address.country);
employee_info.address.country="United Kingdom";
console.log(`  employee_info : country(After update)==> `,employee_info.address.country);
console.log(`*************************************************************************************`);





