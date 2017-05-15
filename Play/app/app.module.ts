//Modulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { PalabraComponent } from './components/palabra.component';
import { NivelComponent } from './components/nivel.component';
import { PruebaComponent } from './components/prueba.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './services/rutas';
import { AuthService } from './login/autorizacion.service'
import {HeroeService} from './services/heroe.service';
//Decorador - funcion que modifica las clases de JS

@NgModule({
	imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
	declarations: [ AppComponent, PalabraComponent, NivelComponent,PruebaComponent ],
	providers:[HeroeService, AuthService],
	bootstrap: [ AppComponent ]
})

//Para poder exportar componentes de esta clase

export class AppModule{}