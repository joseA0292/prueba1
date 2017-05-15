//Modulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { AppFormulario } from './formulario.component'
import { HttpModule, JsonpModule } from '@angular/http';
import {HeroeService} from './services/heroe.service';
import { AuthService } from './login/autorizacion.service'

//Decorador - funcion que modifica las clases de JS

@NgModule({
	imports: [ BrowserModule, FormsModule ,HttpModule, JsonpModule],
	declarations: [ AppComponent,  AppFormulario ],
	bootstrap: [ AppComponent ]
})

//Para poder exportar componentes de esta clase

export class AppModule{}