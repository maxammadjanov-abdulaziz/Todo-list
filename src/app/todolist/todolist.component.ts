import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'], // исправлено: styleUrl -> styleUrls
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskArray.push({
        taskName: form.controls['task'].value, // 'task' - имя input-а из шаблона
        isCompleted: false,
      });

      // Сброс формы после добавления задачи
      form.reset();
    } else {
      console.error('Form is invalid');
    }
  }

  onDelete(index: number) {
    console.log(index)
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    console.log(this.taskArray)

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
}

