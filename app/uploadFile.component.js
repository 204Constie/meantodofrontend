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
var UploadComponent = (function () {
    function UploadComponent(router) {
        this.router = router;
    }
    UploadComponent.prototype.navigateBack = function () {
        this.router.navigate(['']);
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        selector: 'app-upload',
        // templateUrl: './app/uploadFile.component.html',
        template: "\n  <h1>\n    <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n  </h1>\n\n  <form ngNoForm method=\"post\" enctype=\"multipart/form-data\" action=\"/file-upload\">\n    <div class=\"addtodo\">\n      <input class=\"addtodo__item\" type=\"file\" name=\"thumbnail\">\n      <button class=\"addtodo__item\" style=\"margin-top: 2%;\" type=\"submit\" >submit</button>\n    </div>\n  </form>\n\n  ",
        styleUrls: ['app/listTodos.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=uploadFile.component.js.map