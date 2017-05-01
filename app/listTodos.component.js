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
var todo_service_1 = require("./todo.service");
var ListComponent = (function () {
    function ListComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ListComponent.prototype.taskInput = function (event) {
        this.taskString = event.target.value;
    };
    ListComponent.prototype.parseTodo = function () {
        return {
            todo: this.taskString,
            isDone: false,
            hasAttachment: false
        };
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    ListComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; }, function (error) { return console.log('some error occured'); });
    };
    ListComponent.prototype.viewTodo = function (id) {
        console.log('id: ', id);
        this.router.navigate(['todo', id]);
    };
    ListComponent.prototype.deleteTodo = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.todoService.deleteTodo(todo).subscribe();
    };
    ListComponent.prototype.changeTodoStatus = function (todo) {
        todo.isDone = true;
        this.todoService.postTodo(todo).subscribe();
    };
    ListComponent.prototype.addTodo = function () {
        this.router.navigate(['addtodo']);
    };
    ListComponent.prototype.uploadFile = function () {
        this.router.navigate(['upload']);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        templateUrl: './app/listTodos.component.html',
        styleUrls: ['app/listTodos.component.css'],
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService, router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=listTodos.component.js.map