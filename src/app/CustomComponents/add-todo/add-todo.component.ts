import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title!: string;
  desc!: string;

  onSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
