import { Component } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"Do some work",
        desc: "Just do it!",
        active: true
      },
      {
        sno:2,
        title:"Do some work",
        desc: "Just do it!",
        active: true
      },
      {
        sno:3,
        title:"Do some work",
        desc: "Just do it!",
        active: true
      }
    ]
  }
}
