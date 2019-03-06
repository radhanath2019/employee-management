import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employee'
import { Employee } from '../employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = EMPLOYEES;
  employee ={id:1,name:'',email:'',phone:0,address:''};

  addEmployee(){
    
    var obj={
      id:this.employees.length+1,
      name:this.employee.name,
      email:this.employee.email,
      phone:this.employee.phone,
      address:this.employee.address
    }
    this.employees.push(obj);
    this.employee={id:1,name:'',email:'',phone:0,address:''};
  }
  removeEmployee(){
    for(var i =0;i<this.employees.length;i++){
      if(this.employees[i].id==this.employee.id){
        this.employees.splice(i,1);
      }
    }

  }
  selectedEmployee: Employee;
onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
}
  constructor() {  
  }

  ngOnInit() {
  }

}
