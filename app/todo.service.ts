import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private todosApiUrl = '/api/todos/test';
  private updateTodoUrl = '/api/todo';
  private getTodoUrl = '/api/todo/';

  constructor(private http: Http) { }

  // getiTodos(): Promise<Todo[]> {
  //   return this.http.get(this.todosApiUrl)
  //              .toPromise()
  //              .then(response => response.json() as Todo[])
  // }

  getTodos(){
    return this.http.get(this.todosApiUrl).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('sth went wrong with test get');
      }
    );
  }

  getTodo(id: String){
    return this.http.get('/api/todo/' + id).map(
      (response: Response) => {
        const data = response.json();
        console.log('data: ', data);
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('sth went wrong with todo get');
      }
    )
  }

  deleteTodo(todo: Todo){
    return this.http.delete(this.updateTodoUrl, {body: todo}).map(
      (response: Response) => {
        console.log('response to delete request: ', response);
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('sth went wrong with delete request');
      }
    )
  }

  postTodo(todo: any){
    return this.http.post(this.updateTodoUrl, {data: todo}).map(
      (response: Response) => {
        console.log('response to post request: ', response);
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('sth went wrong with post request');
      }
    )
  }

}
