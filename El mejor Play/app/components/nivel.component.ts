//Componente principal
import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { Ahorcado } from '../classes/ahorcado'
import { Palabra } from '../classes/palabra'
import {Router} from '@angular/router'
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {HeroeService} from '../services/heroe.service'
import {AuthService} from "../login/autorizacion.service"

@Component({
	selector: 'my-nivel',		//Se usa como tag html
	//template: 'app/app.component.html'
	providers:[HeroeService],
	templateUrl: 'app/components/vistas/nivel.html' 
})

export class NivelComponent {
	niveles: number
	restantes: number
	palabras: Palabra[]
	palabra: Palabra
	alphabet: Array<string>
  	game: Ahorcado
 
		
	constructor(private router: Router, private heroeService:HeroeService, private auth: AuthService){
		this.getPalabras();
		
	}
crearNivel(){
		//console.log(this.palabras);
		this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length) ]
    this.game = new Ahorcado(this.palabra.palabra)
		this.alphabet = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U','V','X','W','Y','Z',
		]
}
getPalabras(){
	this.palabras = JSON.parse(localStorage.getItem('palabras'));
	this.niveles = JSON.parse(localStorage.getItem('niveles'));



	this.restantes = this.niveles*2;
	this.crearNivel();

console.log(this.palabras);
			
    
			
		}
          
nextLevel(estado : number ){
	    let index: number = this.palabras.indexOf(this.palabra);

    if (index !== -1) {
        this.palabras.splice(index, 1);
		this.niveles = this.niveles -1;
	
	if( this.niveles <= 0){
		estado = 2;
		this.niveles = 4;
	}
	localStorage.setItem('palabras',JSON.stringify(this.palabras));
	localStorage.setItem('niveles', JSON.stringify(this.niveles));
		//console.log(this.palabras)
		this.router.navigate(['/siguiente',estado]);

    } 
}	



	onKeyUp(guess: string) {
        console.log(guess)
		this.game.setGuess(guess)
		this.game.ast = this.game.getWord();
    }

	makeGuess(guess: string) {
		
		console.log(guess)
		this.game.setGuess(guess)
		this.game.ast = this.game.getWord();
		console.log(this.game.ast);
		
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
