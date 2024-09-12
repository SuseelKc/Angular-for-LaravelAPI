import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  id:any;
  data:any;
  employee =new Employee();
  constructor(private route:ActivatedRoute,private dataService:DataService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
    this.getEmployeeById();
  }


  getEmployeeById(){

    this.dataService.getByID(this.id).subscribe(res =>{
      this.data=res;
      this.employee=this.data;
    });
  }
  updateEmployee(){
    this.dataService.updateEmployee(this.id,this.data).subscribe(res =>{
      this.router.navigate(['/']);
    });
  }


}
