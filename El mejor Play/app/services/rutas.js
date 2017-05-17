"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nivel_component_1 = require("../components/nivel.component");
var prueba_component_1 = require("../components/prueba.component");
var home_component_1 = require("../components/home.component");
var router_1 = require("@angular/router");
var siguiente_component_1 = require("../components/siguiente.component");
var rutas = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'nivel',
        component: nivel_component_1.NivelComponent
    },
    {
        path: 'prueba',
        component: prueba_component_1.PruebaComponent
    },
    {
        path: 'siguiente/:id',
        component: siguiente_component_1.SiguienteComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=rutas.js.map