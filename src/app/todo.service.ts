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
        return Observable.throw('sth went wrrong');
      }
    );
  }
}
