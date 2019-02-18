import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-child',
  templateUrl: './emp-child.component.html',
  styleUrls: ['./emp-child.component.css']
})
export class EmpChildComponent {

    // @Input() name : string;
    // @Input('childname') name : string;

    @Input() childname : string;
    @Output() outputToParent = new EventEmitter<string>();
    
    notificationToParent(selected:string) {
      this.outputToParent.emit(selected);
    }
 
    /* msg: string = '';
    private _name : string

    @Input()
    set setChildName(strName : string){
      if (strName!=undefined) {
        this.msg = 'The selected employee name is : ';
        this._name =  strName;
      }
    }

    get getChildName() : string{
        return this._name;
    } */

}
