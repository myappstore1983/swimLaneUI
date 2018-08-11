import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private fieldArray: Array<any> = [];
  // private newAttribute: any = {};
  private newColumn: any = {};
  private columnArray: Array<any> = ['Num'];
  private newRow: any = {};
  private rowArray: Array<any> = [];


  lanes: Lanes[] = [
    {name: 'Voice'},
    {name: 'Web'},
    {name: 'Email'},
    {name: 'SMS'},
  ];

  addFieldValue() {
      // this.fieldArray.push(this.newAttribute)
      // this.newAttribute = {};
  }

  deleteFieldValue(index) {
      // this.fieldArray.splice(index, 1);
  }

  addRow() {
    this.rowArray.push(this.newRow)
    this.newRow = {};
  }
  addColumn() {
    this.columnArray.push(this.newColumn)
    this.newColumn = {};
  }
  change(event){
    console.log(event);
    this.columnArray.push(event);
    this.newColumn = {};
    }
}

export interface Lanes {
  name: string;
}
