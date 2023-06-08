class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];  // very imp step to perform operation

console.log(`1) Find all the employees from wipro company `);

const wiproEmployeeObject=arrayEmps.filter((element)=>{
    return element.emp_company=="Wipro";                            //finding object containing wipro employees
});

const wiproEmployeeNames=wiproEmployeeObject.map((element)=>{
    return element.emp_name;                                      // adding employee names to wiproEmployeeNames array
})

console.log(`   `, wiproEmployeeNames);
console.log(`----------------------------------------------------------------`);

console.log(`2) Find all the employees from IT or HR department `);

const itAndHrDeptObj=arrayEmps.filter((element)=>{
    return element.emp_dept=="IT" || element.emp_dept=="HR";                            //finding object containing wipro employees
});

const itAndHrDeptNames=itAndHrDeptObj.map((element)=>{
    return element.emp_name;                                      // adding employee names to wiproEmployeeNames array
})

console.log(`   `, itAndHrDeptNames);
console.log(`----------------------------------------------------------------`);

console.log(`3) Find all the employees whose employee id's are greater than 50 `);

const greaterIdObj=arrayEmps.filter((element)=>{
    return element.emp_id>50;                            //finding object containing wipro employees
});

const greaterIdNames=greaterIdObj.map((element)=>{
    return element.emp_name;                                      // adding employee names to wiproEmployeeNames array
})

console.log(`   `, greaterIdNames);
console.log(`----------------------------------------------------------------`);

console.log(`4) Find all the employees whose names starts with letter "A" or "V" or "M"`);


const employeeNames=arrayEmps.filter((element)=>{
    return element.emp_name;                            //finding object containing wipro employees
});
const empArray=[];
for (const element of employeeNames) {
    if(element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
        empArray.push(element.emp_name);
    }
}

console.log(`   `, empArray);
console.log(`----------------------------------------------------------------`);

console.log(`5) Find the average salary of the employee for all the department`);

const employeeSalaryObj=arrayEmps.filter((element)=>{
    return element.emp_salary;                       // selected object containing salary
});

let sum=0;
for (const element of employeeSalaryObj) {         // travels on object to sum salaries of object
    sum=sum+element.emp_salary;
}
const average=sum/employeeSalaryObj.length;
console.log(`   Average Salary : ${average}`);
console.log(`----------------------------------------------------------------`);

console.log(`6) Find the average salary of IT department`);

const itEmployeeSalaryObj=arrayEmps.filter((element)=>{
    return element.emp_dept=="IT";                       // selected object containing salary of dept IT
});
const itSalary=itEmployeeSalaryObj.map((element)=>{
    return element.emp_salary;
});
let sumOfSalary=0;

itSalary.forEach((element)=>{
    sumOfSalary=sumOfSalary+element ;          // not need to element.emp_salary as it derectly points to salary
    });
const itDeptSalaryAverage=sumOfSalary/itSalary.length;
console.log(`   IT Department Average Salary : `,itDeptSalaryAverage);
console.log(`----------------------------------------------------------------`);
