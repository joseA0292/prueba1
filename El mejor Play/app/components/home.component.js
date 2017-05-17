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
var core_2 = require("@angular/core");
var heroe_service_1 = require("../services/heroe.service");
var autorizacion_service_1 = require("../login/autorizacion.service");
var HomeComponent = (function () {
    function HomeComponent(router, heroeService, auth) {
        this.router = router;
        this.heroeService = heroeService;
        this.auth = auth;
        this.title = "¡Bienvenido al ahorcado!";
        this.getPalabras();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.auth.logout();
        this.auth.login("ucam1", "cbr48zC");
        this.auth.getInfo();
    };
    HomeComponent.prototype.getPalabras = function () {
        var _this = this;
        this.heroeService.getPalabrasHttp()
            .then(function (palabras) {
            palabras.forEach(function (palabra) {
                palabra.palabra = palabra.palabra.toUpperCase();
            });
            _this.palabras = palabras;
            //console.log(this.palabras);	
            localStorage.setItem('palabras', JSON.stringify(_this.palabras));
            localStorage.setItem('niveles', JSON.stringify(4));
            //console.log(JSON.parse(localStorage.getItem('palabras')));
        });
    };
    HomeComponent.prototype.onSubmit = function () {
        this.router.navigate(['/nivel']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        //template: 'app/app.component.html'
        templateUrl: 'app/components/vistas/home.html'
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, heroe_service_1.HeroeService, autorizacion_service_1.AuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map