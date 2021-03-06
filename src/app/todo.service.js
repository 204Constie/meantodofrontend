"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.todosApiUrl = '/api/todos/test';
    }
    // getiTodos(): Promise<Todo[]> {
    //   return this.http.get(this.todosApiUrl)
    //              .toPromise()
    //              .then(response => response.json() as Todo[])
    // }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.todosApiUrl).map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw('sth went wrrong');
        });
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map