import { Component } from '@angular/core';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TodoService ]
})
export class AppComponent  {
  todos: Todo[];
  constructor(private todoService: TodoService) { }
  getTodos(){
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => this.todos = todos,
      (error) => console.log('some error occured')
    );
    // .then(todos => this.todos = todos);
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
