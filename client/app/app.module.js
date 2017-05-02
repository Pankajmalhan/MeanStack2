"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var newEmployee_component_1 = require("./components/newEmployee/newEmployee.component");
var home_component_1 = require("./components/home/home.component");
var edit_component_1 = require("./components/edit/edit.component");
var details_component_1 = require("./components/details/details.component");
var services_1 = require("./services/services");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            newEmployee_component_1.newEmployeeComponent,
            home_component_1.homeComponent,
            edit_component_1.editComponent,
            details_component_1.detailsComponent
        ],
        providers: [services_1.EmployeeServcies],
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.homeComponent },
                { path: 'details/:id', component: details_component_1.detailsComponent },
                { path: 'new', component: newEmployee_component_1.newEmployeeComponent },
                { path: 'edit/:id', component: edit_component_1.editComponent },
                { path: '**', redirectTo: 'home' }
            ])],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map