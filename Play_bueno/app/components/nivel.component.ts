//Componente principal
import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { Ahorcado } from '../classes/ahorcado'
import { Palabra } from '../classes/palabra'
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {HeroeService} from '../services/heroe.service'
import {AuthService} from "../login/autorizacion.service"

@Component({
	selector: 'my-nivel',		//Se usa como tag html
	//template: 'app/app.component.html'
	providers:[HeroeService],
	template: `
	<button  (click)="getPalabras()">Cargar</button>
    <button  (click)="crearNivel()">Empezar</button>
    <div *ngIf="cont>0"><h1>{{ game.getWord() }}</h1></div>
		
    <input class="form-control" type="text" maxlength="1" #pal (keyup)="onKeyUp(pal.value)" [(ngModel)]="guess">
  
		<button *ngFor="let letter of alphabet" (click)="makeGuess(letter)">{{ letter }}</button>

<ul class="Palabras">
	<li *ngFor="let palabra of palabras">
{{palabra.nivel}} {{palabra.palabra}} {{palabra.pista}}
	</li>
	</ul>	
		<br /><br /><br /><br />
		<br /><br /><br /><br />
		{{title}}
		
		
	` 
})

export class NivelComponent {
	title = "Titulo de prueba en component";
	palabras: Palabra[]
	alphabet: Array<string>
  	game: Ahorcado
    cont: number = 0
    
		
	constructor(private heroeService:HeroeService, private auth: AuthService){

		
	}
	ngOnInit(){
		this.auth.logout();
		this.auth.login("ucam1", "cbr48zC");


		
	}

 delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


crearNivel(){
    this.game = new Ahorcado(this.palabras[Math.floor(Math.random() * this.palabras.length) ].palabra)
		this.alphabet = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U','V','X','W','Y','Z',
		]
        this.cont++;
}
getPalabras():void{
	this.heroeService.getPalabrasHttp()
	.then(
		(palabras) => {
			
			palabras.forEach(palabra => {
				palabra.palabra = palabra.palabra.toUpperCase();
			});
			

			
			this.palabras = palabras;
            console.log(this.palabras[0].palabra);
			
		}
          
	);
}


	onKeyUp(guess: string) {
        console.log(guess)
		this.game.setGuess(guess)
    }

	makeGuess(guess: string) {
		
		console.log(guess)
		this.game.setGuess(guess)
		
		
	}
	/*
	conseguirPalabras():Promise<Palabra[]>{
		return this.http.get('http://127.0.0.1:8080/heroes/putHeroe')
		.topromise()
		.then(
			(response) =>
			let respuesta:any = response;
			let pal:Palabra[] = JSON.parse(respuesta._body);
		)
 
	}
*/
	/*  guess: string = 'a';

  @Output() keyup : EventEmitter<any> = new EventEmitter();
  @Output() guessMade: EventEmitter<string> = new EventEmitter();

  sendKeyUp() {
    this.keyup.emit(null);
  }

  makeGuess(){
	  this.guessMade.emit(this.guess);
      this.guess = "";
  }
  */


}
