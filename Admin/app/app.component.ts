//Componente principal
import { Component } from '@angular/core';
import {HeroeService} from "./services/heroe.service"
import { AppFormulario } from './formulario.component'
import { Observable } from 'rxjs/Observable';
import { AuthService } from './login/autorizacion.service'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
	selector: 'my-app',		//Se usa como tag html
	providers:[HeroeService, AuthService],
	template: `<h1>Back-End<h1>
	<formulario> </formulario>
	
	`   
})

export class AppComponent {}