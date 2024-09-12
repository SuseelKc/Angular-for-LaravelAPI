import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees:any;  
  employee = new Employee(); //employe object
  constructor(private dataService:DataService){

  }

  ngOnInit(): void {    
    this.getEmployeesData(); //loads to the front end
  }
  getEmployeesData(){
    this.dataService.getData().subscribe(res =>{  //fetching data from the route getData()
      this.employees=res;
    });
  }

  insertData(){
    console.log(this.employee);
    this.dataService.addEmployee(this.employee).subscribe(res=>{
      console.log(res);
      this.getEmployeesData();
    });
    
  }
}
