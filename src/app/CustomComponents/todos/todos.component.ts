import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../../Friend';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todos: Todo[];
  friends!:Friend[];
  private friendsUrl = "http://localhost:9001/friends";


  deleteTodo(todo: Todo) {
    console.log(todo);
    const indexOfTodoToBeDeleted = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodoToBeDeleted, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }

  checkTodo(todo: Todo) {
    console.log("Todo checked");
    const indexOfTodoToBeChecked = this.todos.indexOf(todo);
    this.todos[indexOfTodoToBeChecked].active = !this.todos[indexOfTodoToBeChecked].active;
  }

  constructor(private client: HttpClient) {
    this.todos = [];
  }

  ngOnInit() {
    this.getFriendsList().subscribe((data) => this.friends = data);
  }

  public getFriendsList(): Observable<Friend[]>{
    return this.client.get<Friend[]>(`${this.friendsUrl}`);
  }
}
