import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './app/listTodos.component.html',
  styleUrls: ['app/listTodos.component.css'],
  providers: [ TodoService ]
})
export class ListComponent implements OnInit {
  todos: Todo[];
  private taskString: String;

  constructor(private todoService: TodoService, private router: Router) { }

  taskInput(event: any){
    this.taskString = event.target.value;
  }

  parseTodo(){
    return {
      todo: this.taskString,
      isDone: false,
      hasAttachment: false
    }
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => this.todos = todos,
      (error) => console.log('some error occured')
    );
  }

  viewTodo(id: String){
    console.log('id: ', id);
    this.router.navigate(['todo', id]);
  }

  deleteTodo(todo: Todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.todoService.deleteTodo(todo).subscribe();
  }

  changeTodoStatus(todo: Todo){
    todo.isDone = true;
    this.todoService.postTodo(todo).subscribe();
  }

  addTodo(){
    this.router.navigate(['addtodo']);
  }

}
