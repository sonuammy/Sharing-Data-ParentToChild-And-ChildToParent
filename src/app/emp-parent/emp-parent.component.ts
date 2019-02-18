import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-parent',
  templateUrl: './emp-parent.component.html',
  styleUrls: ['./emp-parent.component.css']
})
export class EmpParentComponent{

  Name : string;
  employees = ["Amit","Rahul","Sumit"];
  childCurrentVal : string;

  setName(emp:string) {
      this.Name = emp;
  }
    
  getOutputVal(selected:string) {
    if(selected) {
      this.childCurrentVal = "Value received from child : " + selected;
    }
  }
}
