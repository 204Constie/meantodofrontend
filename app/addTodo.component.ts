import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FakeTodo } from './fakeTodo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './app/addTodo.component.html',
  styleUrls: ['app/listTodos.component.css'],
  providers: [ TodoService ]
})
export class AddComponent  {
  fakeTodos: FakeTodo[] = [];
  private taskString: String;

  constructor(private todoService: TodoService, private router: Router) { }

  taskInput(event: any){
    this.taskString = event.target.value;
  }

  parseTodo(): FakeTodo{
    let fakeTodo = new FakeTodo();
    fakeTodo = {
      todo: this.taskString,
      isDone: false,
      hasAttachment: false
    }
    return fakeTodo;
  }

  addTodo(){
    let todo: FakeTodo = this.parseTodo();
    this.fakeTodos.push(todo);
  }

  deleteTodo(fakeTodo: FakeTodo){
    this.fakeTodos.splice(this.fakeTodos.indexOf(fakeTodo), 1);
  }

  submitTodos(){
    for(let todo of this.fakeTodos){
        this.todoService.postTodo(todo).subscribe();
    }

    this.router.navigate(['']);
  }

}
