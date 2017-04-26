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
//Componente principal
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var heroe_service_1 = require("./services/heroe.service");
var palabra_1 = require("./classes/palabra");
var AppFormulario = (function () {
    function AppFormulario(heroeService) {
        this.heroeService = heroeService;
        this.palabra = new palabra_1.Palabra();
        // Definimos el objeto usuario, vació inicialmente (necesario)
    }
    ;
    AppFormulario.prototype.crearahorcado = function () {
        this.heroeService.postPalabraHttp(this.palabra);
    };
    return AppFormulario;
}());
AppFormulario = __decorate([
    core_1.Component({
        selector: 'formulario',
        providers: [heroe_service_1.HeroeService],
        template: "\n \t\n  {{palabra.nivel}}\n  {{palabra.palabra}}\n  {{palabra.pista}}\n\n\t\n\t<div class=\"container\"> \n    <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      Formulario\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n      <form  (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n\n          <label for=\"nivel\">Nivel:</label>\n          <input type=\"number\" class=\"form-control\" required [(ngModel)]=\"palabra.nivel\"  name=\"nivel\" id=\"nivel\">\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"palabra\">Palabra:</label>\n          <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"palabra.palabra\" name=\"palabra\" id=\"palabra\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pista\">Pista:</label>\n          <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"palabra.pista\" name=\"pista\"  id=\"pista\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"crearahorcado(palabra)\">Enviar</button>\n\n      </form>\n  </div>\n</div>\n\t\n\t\n\t",
        styles: ["\n        .container {\n            color: black;\n\t\t\tfont: bold 30% monospace;\n        }\n\n\t\t\n\n    \n    "]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [heroe_service_1.HeroeService])
], AppFormulario);
exports.AppFormulario = AppFormulario;
//# sourceMappingURL=formulario.component.js.map