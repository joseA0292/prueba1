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
var router_2 = require("@angular/router");
var SiguienteComponent = (function () {
    function SiguienteComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SiguienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscripción al observable params
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'].toString();
        });
        console.log(this.id);
    };
    SiguienteComponent.prototype.onSubmit = function () {
        this.router.navigate(['/nivel']);
    };
    SiguienteComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    return SiguienteComponent;
}());
SiguienteComponent = __decorate([
    core_1.Component({
        selector: 'my-next',
        //template: 'app/app.component.html'
        templateUrl: 'app/components/vistas/siguiente.html'
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute])
], SiguienteComponent);
exports.SiguienteComponent = SiguienteComponent;
//# sourceMappingURL=siguiente.component.js.map