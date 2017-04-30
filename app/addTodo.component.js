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
var router_1 = require("@angular/router");
var fakeTodo_model_1 = require("./fakeTodo.model");
var todo_service_1 = require("./todo.service");
var AddComponent = (function () {
    function AddComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.fakeTodos = [];
    }
    AddComponent.prototype.taskInput = function (event) {
        this.taskString = event.target.value;
    };
    AddComponent.prototype.parseTodo = function () {
        var fakeTodo = new fakeTodo_model_1.FakeTodo();
        fakeTodo = {
            todo: this.taskString,
            isDone: false,
            hasAttachment: false
        };
        return fakeTodo;
    };
    AddComponent.prototype.addTodo = function () {
        var todo = this.parseTodo();
        this.fakeTodos.push(todo);
    };
    AddComponent.prototype.deleteTodo = function (fakeTodo) {
        this.fakeTodos.splice(this.fakeTodos.indexOf(fakeTodo), 1);
    };
    AddComponent.prototype.submitTodos = function () {
        for (var _i = 0, _a = this.fakeTodos; _i < _a.length; _i++) {
            var todo = _a[_i];
            this.todoService.postTodo(todo).subscribe();
        }
        this.router.navigate(['']);
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        selector: 'app-add',
        templateUrl: './app/addTodo.component.html',
        styleUrls: ['app/listTodos.component.css'],
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService, router_1.Router])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=addTodo.component.js.map