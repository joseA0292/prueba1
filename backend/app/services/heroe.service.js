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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HeroeService = (function () {
    function HeroeService(http) {
        this.http = http;
        this.ruta = 'http://127.0.0.1:8080/palabras/getPalabras';
        this.header = new Headers({ 'content-type': 'application/json' });
    }
    HeroeService.prototype.getPalabrasHttp = function () {
        return this.http.get(this.ruta)
            .toPromise()
            .then(function (response) {
            var respuesta = response;
            var palabras = JSON.parse(respuesta._body);
            return palabras;
        }).catch();
    };
    HeroeService.prototype.postPalabraHttp = function (palabra) {
        var ruta = 'http://127.0.0.1:8080/palabras/putPalabra';
        return this.http.post(ruta, palabra, this.header)
            .toPromise().then(function () { return 'la palabra se ha guardado correctamente'; }).catch();
    };
    return HeroeService;
}());
HeroeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroeService);
exports.HeroeService = HeroeService;
//# sourceMappingURL=heroe.service.js.map