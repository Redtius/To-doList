import { Component, Input, Output } from '@angular/core';
import { TaskRepresentation } from '../../services/representations/task.representation';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: TaskRepresentation = {};
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
