import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './app/todo.component.html',
  styleUrls: ['app/listTodos.component.css'],
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit {
  // @Output() updateTodo = new EventEmitter<Todo>();
  todo: Todo;
  todoId: String;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  getTodo(){
    this.todoService.getTodo(this.todoId).subscribe(
      (response: Todo) => {
        this.todo = response;
      },
      (error: Response) => console.log('error occured during todo get: ', error)
    )
  }

  ngOnInit(){
    this.route.params.subscribe(
      params => this.todoId = params['id']
    )
    this.getTodo()
  }

  navigateBack(){
    this.router.navigate(['']);
  }


}
