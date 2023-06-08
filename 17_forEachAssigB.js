//Use only forEach()
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

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`1) Find out the TCS employee details and log only name & company on console `);

array_employees.forEach((element)=>{
    if(element.emp_company=="TCS")
    console.log(`   Employee Name : ${element.emp_name}           Company : ${element.emp_company}`);
});

console.log(`2) Find the employees with salary greater than equal 50,000 & log all employee details on console `);

array_employees.forEach((element)=>{
    if(element.emp_salary>=50000)
    console.log(`   `,element);
});

console.log(`3) Find the sum of all employee salary & log on console `);

let sum=0;
array_employees.forEach((element)=>{
    sum=sum+element.emp_salary;
        
});
console.log(`   Sum of all employee salary => ${sum}`);

console.log(`4) Find the Average salary & log on console `);

let average=sum/array_employees.length;
console.log(`   Average salary => ${average}`);

console.log(`5) Find the IT oR HR department Employees whose salary is greater than or equal to 75000 & log complete employee details on console `);
array_employees.forEach((element)=>{
    if(element.emp_dept=="IT" || element.emp_dept=="HR" ){
        if(element.emp_salary>=75000){
            console.log(`   `,element);
        }
    }
        
});

 



