"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nivel_component_1 = require("../components/nivel.component");
var prueba_component_1 = require("../components/prueba.component");
var router_1 = require("@angular/router");
var rutas = [
    {
        path: 'nivel',
        component: nivel_component_1.NivelComponent
    },
    {
        path: 'prueba',
        component: prueba_component_1.PruebaComponent
    },
    {
        path: '',
        redirectTo: '/nivel',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=rutas.js.map