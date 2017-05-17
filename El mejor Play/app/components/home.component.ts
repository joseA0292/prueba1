import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import {Router} from "@angular/router"
import { EventEmitter} from '@angular/core';
import { Ahorcado } from '../classes/ahorcado'
import { Palabra } from '../classes/palabra'
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {HeroeService} from '../services/heroe.service'
import {AuthService} from "../login/autorizacion.service"


@Component({
	selector: 'my-home',		//Se usa como tag html
	//template: 'app/app.component.html'
	templateUrl: 'app/components/vistas/home.html'
})

@Injectable()
export class HomeComponent {
	cont : number;
	public title = "¡Bienvenido al ahorcado!";		
    palabras: Palabra[];
	constructor(private router: Router, private heroeService:HeroeService, private auth: AuthService){
		
		
	}
	ngOnInit(){
		this.auth.logout();
		this.auth.login("ucam1", "cbr48zC");
		this.auth.getInfo();
		this.cont = 0;
		
	}
getPalabras():void{
	this.heroeService.getPalabrasHttp()
	.then(
		(palabras) => {
			
			palabras.forEach(palabra => {
				palabra.palabra = palabra.palabra.toUpperCase();
			});
			

			
			this.palabras = palabras;
            //console.log(this.palabras);	
			localStorage.setItem('palabras',JSON.stringify(this.palabras));
			localStorage.setItem('niveles',JSON.stringify(4));
            //console.log(JSON.parse(localStorage.getItem('palabras')));
			this.cont = 1;
            
			
		}
          
	);
}
click(){
	this.getPalabras();
}

onSubmit(){
	
this.router.navigate(['/nivel']);
}


}
