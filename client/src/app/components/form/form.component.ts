import { Component, EventEmitter, Output } from '@angular/core';
import { TaskRepresentation } from '../../services/representations/task.representation';
import { randomInt } from 'crypto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<TaskRepresentation>();

  task:TaskRepresentation = {
    id: Math.random(),
    name: '',
    description: '',
    status: 'todo',
    deadline: new Date(),
  };

  close() {
    this.closeModal.emit();
  }

  submit() {
    if(this.task.name && this.task.description && this.task.deadline)
    this.submitForm.emit(this.task);

}
}
