import {Component} from '@angular/core';

@Component({
	selector:'my-app',
	template:`
	
	<h1>{{title}}</h1>
	<ul>
	<a routerLink="/nivel">cargar nivel</a>
	<a routerLink="/prueba">cargar prueba</a>
	</ul>
	<router-outlet></router-outlet>
	
	`
})

export class AppComponent{
public title = "bienvenido al ahorcado";
}