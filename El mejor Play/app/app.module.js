"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modulo principal
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app.component");
var nivel_component_1 = require("./components/nivel.component");
var prueba_component_1 = require("./components/prueba.component");
var home_component_1 = require("./components/home.component");
var http_1 = require("@angular/http");
var rutas_1 = require("./services/rutas");
var autorizacion_service_1 = require("./login/autorizacion.service");
var siguiente_component_1 = require("./components/siguiente.component");
var heroe_service_1 = require("./services/heroe.service");
//Decorador - funcion que modifica las clases de JS
var AppModule = (function () {
    //Para poder exportar componentes de esta clase
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, rutas_1.routing],
        declarations: [app_component_1.AppComponent, nivel_component_1.NivelComponent, prueba_component_1.PruebaComponent, home_component_1.HomeComponent, siguiente_component_1.SiguienteComponent],
        providers: [heroe_service_1.HeroeService, autorizacion_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
    //Para poder exportar componentes de esta clase
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map