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
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/rx");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //console.log("Estoy en el login");
        return this.http.post('http://game.tcm.juanjofp.com/auth/login', JSON.stringify({ user: username, password: password }), { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log(response);
            var token = response.json() && response.json().token;
            if (token) {
                //console.log("Tengo el token");
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return true;
            }
            else {
                //console.log("No tengo el token");
                return false;
            }
        })
            .catch(this.handlerError);
    };
    AuthService.prototype.getInfo = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //console.log("Estoy en el login");
        return this.http.get('http://game.tcm.juanjofp.com/games/info/21de3f18-fcd7-11e6-af62-005056992599', { headers: headers })
            .toPromise()
            .then(function (response) {
            var respuesta = response;
            console.log(respuesta);
            console.log(JSON.parse(respuesta._body));
        })
            .catch(this.handlerError);
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('palabras');
        localStorage.removeItem('niveles');
    };
    AuthService.prototype.handlerError = function (error) {
        return observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=autorizacion.service.js.map