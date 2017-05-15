//main principal
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


//Cargamos modulo, en este caso solo tenemos uno que es appmodule

import { AppModule } from './app.module';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);