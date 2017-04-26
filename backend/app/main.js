"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//main principal
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//Cargamos modulo, en este caso solo tenemos uno que es appmodule
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map