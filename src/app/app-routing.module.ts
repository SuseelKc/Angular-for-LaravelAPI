import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

// importing the route 

const routes: Routes = [
  {path:'',component:EmployeesComponent},  //defining the path of route
  {path:'edit/:id',component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //REGISTER DATA
  exports: [RouterModule]
})
export class AppRoutingModule { }
