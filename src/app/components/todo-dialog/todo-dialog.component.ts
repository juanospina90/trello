import { Component, Inject, OnInit, inject} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faClose,
  faCheckToSlot,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { toDo } from '../models/todo.model';
import { Data } from '@angular/router';
 interface inputData{
  todo : toDo;
 }
 interface outputData{
  rta : boolean;
 }
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {
 faUser = faUser;
 faTag = faTag;
 faCheckSquare = faCheckSquare;
 faClock = faClock;
 faClose = faClose;
 faCheckToSlot = faCheckToSlot;
 faBars = faBars;
 todo!: toDo;

  constructor(
    private dialogRef: DialogRef<outputData>,
    @Inject(DIALOG_DATA)  data: inputData
  ){
this.todo = data['todo'];
  }

  ngOnInit(): void {
    
  }
  close(){
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean){
    this.dialogRef.close({
      rta
    });
  }

}
