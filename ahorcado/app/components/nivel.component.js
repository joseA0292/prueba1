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
var ahorcado_1 = require("../classes/ahorcado");
var heroe_service_1 = require("../services/heroe.service");
var NivelComponent = (function () {
    function NivelComponent(heroeService) {
        this.heroeService = heroeService;
        this.title = "Titulo de prueba en component";
        this.cont = 0;
        this.getPalabras();
    }
    NivelComponent.prototype.crearNivel = function () {
        this.game = new ahorcado_1.Ahorcado(this.palabras[Math.floor(Math.random() * this.palabras.length)].palabra);
        this.alphabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z',
        ];
        this.cont++;
        this.getPalabras();
    };
    NivelComponent.prototype.getPalabras = function () {
        var _this = this;
        this.heroeService.getPalabrasHttp()
            .then(function (palabras) {
            _this.palabras = palabras;
            console.log(_this.palabras[1].palabra);
        });
    };
    NivelComponent.prototype.onKeyUp = function (guess) {
        console.log(guess);
        this.game.setGuess(guess);
    };
    NivelComponent.prototype.makeGuess = function (guess) {
        console.log(guess);
        this.game.setGuess(guess);
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    core_1.Component({
        selector: 'my-nivel',
        //template: 'app/app.component.html'
        providers: [heroe_service_1.HeroeService],
        template: "\n\n    <button  (click)=\"crearNivel()\">Empezar</button>\n    <div *ngIf=\"cont>0\"><h1>{{ game.getWord() }}</h1></div>\n\t\t\n    <input class=\"form-control\" type=\"text\" maxlength=\"1\" #pal (keyup)=\"onKeyUp(pal.value)\" [(ngModel)]=\"guess\">\n  \n\t\t<button *ngFor=\"let letter of alphabet\" (click)=\"makeGuess(letter)\">{{ letter }}</button>\n\n<ul class=\"Palabras\">\n\t<li *ngFor=\"let palabra of palabras\">\n{{palabra.nivel}} {{palabra.palabra}} {{palabra.pista}}\n\t</li>\n\t</ul>\t\n\t\t<br /><br /><br /><br />\n\t\t<br /><br /><br /><br />\n\t\t{{title}}\n\t\t\n\t\t\n\t"
    }),
    __metadata("design:paramtypes", [heroe_service_1.HeroeService])
], NivelComponent);
exports.NivelComponent = NivelComponent;
//# sourceMappingURL=nivel.component.js.map