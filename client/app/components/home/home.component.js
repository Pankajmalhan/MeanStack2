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
var services_1 = require("./../../services/services");
var core_1 = require("@angular/core");
var homeComponent = (function () {
    function homeComponent(empService) {
        var _this = this;
        this.empService = empService;
        this.EmployeeList = [];
        this.empService.getEmployeeList()
            .subscribe(function (data) { return (_this.EmployeeList = data.json()); });
    }
    return homeComponent;
}());
homeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html',
    }),
    __metadata("design:paramtypes", [services_1.EmployeeServcies])
], homeComponent);
exports.homeComponent = homeComponent;
//# sourceMappingURL=home.component.js.map