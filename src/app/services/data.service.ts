import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http'; 
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) {
 
   }

   getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }
  addEmployee(data: Employee){
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee',data);
  }
  deleteEmployee(id: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }
  getByID(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }
  updateEmployee(id:any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEmployee/'+id,data);
  }
  
}
