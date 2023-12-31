import { Component } from '@angular/core';
import { ProgressComponent } from '../progress/progress.component';
import { TaskRepresentation } from '../../services/representations/task.representation';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [ProgressComponent,DragDropModule,FormComponent,CommonModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
  private tasks: Array<TaskRepresentation>=[
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      status: 'todo',
      deadline: new Date('2020-01-01')
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      status: 'progress',
      deadline: new Date('2020-01-01')
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'Description 3',
      status: 'done',
      deadline: new Date('2020-01-01')
    },
    {
      id: 4,
      name: 'Task 4',
      description: 'Description 4',
      status: 'todo',
      deadline: new Date('2020-01-01')
    },
    {
      id: 5,
      name: 'Task 5',
      description: 'Description 5',
      status: 'progress',
      deadline: new Date('2020-01-01')
    },
    {
      id: 6,
      name: 'Task 6',
      description: 'Description 6',
      status: 'done',
      deadline: new Date('2020-01-01')
    },
    {
      id: 7,
      name: 'Task 7',
      description: 'Description 7',
      status: 'progress',
      deadline: new Date('2020-01-01')
    },
    {
      id: 8,
      name: 'Task 8',
      description: 'Description 8',
      status: 'progress',
      deadline: new Date('2020-01-01')
    },
    {
      id: 8,
      name: 'Task 8',
      description: 'Description 8',
      status: 'progress',
      deadline: new Date('2020-01-01')
    },
  ];

  private currentTask: any;
  private currentStatus: string='';
  private isFormOpen:boolean = false;

  getFormStatus():boolean{
    return this.isFormOpen;
  }

  constructor(
  ) {}

  tasksByStatus(status: string): Array<TaskRepresentation> {
    return this.tasks.filter(task => task.status === status);
  }

  onDelete(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  setStatus(status:string){
    this.currentStatus=status;
    console.log(this.currentStatus);
  }

  drop(event: any) {
    this.currentTask=event.item.data;
    this.currentTask.status=event.container.id;
    this.tasks = this.tasks.filter(task => task.id !== this.currentTask.id);
    this.tasks.push(this.currentTask);
  }

  openForm():void{
    this.isFormOpen=true;
  }

  closeForm():void{
    this.isFormOpen=false;
  }

  onSubmit(task:TaskRepresentation):void{
    console.log(task);
    this.tasks.push(task);
    this.isFormOpen=false;
  }

}
