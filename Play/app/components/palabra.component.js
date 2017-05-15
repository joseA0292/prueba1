"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PalabraComponent = (function () {
    function PalabraComponent() {
        this.title = " prueba ";
        this.palabra = 'hola';
        this.pista = 'Aqui va la pista';
        this.numeroletras = this.palabra.length;
        this.cerrado = '-';
    }
    PalabraComponent.prototype.onKeyUp = function (valor) {
        console.log(valor);
    };
    return PalabraComponent;
}());
PalabraComponent = __decorate([
    core_1.Component({
        selector: 'palabras',
        template: "\n        <h1>{{title}}</h1>\n        <h2>{{pista}}</h2>\n        <p class=\"colorTexto\">Escriba</p>\n        \n        <input type=\"text\" id=\"palabra\" maxlength=\"1\" #pal (keyup)=\"onKeyUp(pal.value)\" />\n        <br />\n        Variable:{{palabra}}\n        <br />\n        Letra insertada local:{{pal.value}}\n\n        \n\n    ",
        styles: ["\n        .colorTexto {\n            color: blue;\n        }\n    \n    "]
    })
], PalabraComponent);
exports.PalabraComponent = PalabraComponent;
//# sourceMappingURL=palabra.component.js.map