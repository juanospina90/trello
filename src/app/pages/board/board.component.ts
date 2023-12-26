import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, toDo } from 'src/app/components/models/todo.model';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  columns: Column[] =[
    {
      tittle: 'ToDo',
      todos:[
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
      ]
    },
    {
      tittle: 'Doing',
      todos:[
        {
          id: '3',
          title: 'Task 3',
        },
      ]
    },
    {
      tittle: 'Done',
      todos:[
        {
          id: '4',
          title: 'Task 4',
        },
      ]
    }
  ]
  todos: toDo[] = [];
  doing: toDo[] = [];
  done: toDo[] =[];
  constructor(
    private dialog: Dialog
  ) {}
  ngOnInit(): void {}
  drop(event: CdkDragDrop<any[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  addColumn(){
    this.columns.push({
      tittle: 'New Column',
      todos: [],
    });
  }
  openDialog(todo: toDo){
   const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data:{
        id: todo,
      }
    });
    dialogRef.closed.subscribe(output =>{
      console.log(output);;
      
    })
  }
}
