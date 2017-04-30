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
var TodoComponent = (function () {
    function TodoComponent(todoService, router, route) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
    }
    TodoComponent.prototype.getTodo = function () {
        var _this = this;
        this.todoService.getTodo(this.todoId).subscribe(function (response) {
            _this.todo = response;
        }, function (error) { return console.log('error occured during todo get: ', error); });
    };
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.todoId = params['id']; });
        this.getTodo();
    };
    TodoComponent.prototype.navigateBack = function () {
        this.router.navigate(['']);
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    core_1.Component({
        selector: 'app-todo',
        templateUrl: './app/todo.component.html',
        styleUrls: ['app/listTodos.component.css'],
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService, router_1.Router, router_1.ActivatedRoute])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map