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
var router_1 = require("@angular/router");
var heroe_service_1 = require("../services/heroe.service");
var autorizacion_service_1 = require("../login/autorizacion.service");
var NivelComponent = (function () {
    function NivelComponent(router, heroeService, auth) {
        this.router = router;
        this.heroeService = heroeService;
        this.auth = auth;
        this.getPalabras();
    }
    NivelComponent.prototype.crearNivel = function () {
        //console.log(this.palabras);
        this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        this.game = new ahorcado_1.Ahorcado(this.palabra.palabra);
        this.alphabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z',
        ];
    };
    NivelComponent.prototype.getPalabras = function () {
        this.palabras = JSON.parse(localStorage.getItem('palabras'));
        this.niveles = JSON.parse(localStorage.getItem('niveles'));
        this.restantes = this.niveles * 2;
        console.log(this.niveles);
        this.crearNivel();
        console.log(this.palabras);
    };
    NivelComponent.prototype.nextLevel = function (estado) {
        var index = this.palabras.indexOf(this.palabra);
        if (index !== -1) {
            this.palabras.splice(index, 1);
            this.niveles = this.niveles - 1;
            localStorage.setItem('palabras', JSON.stringify(this.palabras));
            localStorage.setItem('niveles', JSON.stringify(this.niveles));
            //console.log(this.palabras)
            this.router.navigate(['/siguiente', estado]);
        }
    };
    NivelComponent.prototype.onKeyUp = function (guess) {
        console.log(guess);
        this.game.setGuess(guess);
        this.game.ast = this.game.getWord();
    };
    NivelComponent.prototype.makeGuess = function (guess) {
        console.log(guess);
        this.game.setGuess(guess);
        this.game.ast = this.game.getWord();
        console.log(this.game.ast);
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    core_1.Component({
        selector: 'my-nivel',
        //template: 'app/app.component.html'
        providers: [heroe_service_1.HeroeService],
        templateUrl: 'app/components/vistas/nivel.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, heroe_service_1.HeroeService, autorizacion_service_1.AuthService])
], NivelComponent);
exports.NivelComponent = NivelComponent;
//# sourceMappingURL=nivel.component.js.map