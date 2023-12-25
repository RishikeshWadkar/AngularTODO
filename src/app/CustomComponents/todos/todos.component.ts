import { Component } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todos: Todo[];

  deleteTodo(todo: Todo) {
    console.log(todo);
    const indexOfTodoToBeDeleted = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodoToBeDeleted, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }

  checkTodo(todo: Todo){
    console.log("Todo checked");
    const indexOfTodoToBeChecked = this.todos.indexOf(todo);
    this.todos[indexOfTodoToBeChecked].active = !this.todos[indexOfTodoToBeChecked].active;
  }  

  constructor() {
    this.todos = [];
  }
}
