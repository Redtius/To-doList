import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskRepresentation } from '../../services/representations/task.representation';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, CdkDragEnter, CdkDrag, transferArrayItem } from '@angular/cdk/drag-drop';
import { Console } from 'console';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [TaskComponent,CommonModule,DragDropModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  @Input() tasks: Array<TaskRepresentation> = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  
  onDelete(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.delete.emit(taskId);
  }


}
