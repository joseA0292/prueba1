//Componente principal
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {HeroeService} from "./services/heroe.service"
import {Observable} from "rxjs/Rx";
import {Palabra} from "./classes/palabra"

@Component({
	selector: 'formulario',		//Se usa como tag html
  providers:[HeroeService],
	template: `
 	
  {{palabra.nivel}}
  {{palabra.palabra}}
  {{palabra.pista}}

	
	<div class="container"> 
    <div class="panel panel-default">
    <div class="panel-heading">
      Formulario
    </div>
  </div>

  <div class="panel-body">
      <form  (ngSubmit)="onSubmit()">
        <div class="form-group">

          <label for="nivel">Nivel:</label>
          <input type="number" class="form-control" required [(ngModel)]="palabra.nivel"  name="nivel" id="nivel">

        </div>
        <div class="form-group">
          <label for="palabra">Palabra:</label>
          <input type="text" class="form-control" required [(ngModel)]="palabra.palabra" name="palabra" id="palabra">
        </div>

        <div class="form-group">
          <label for="pista">Pista:</label>
          <input type="text" class="form-control" required [(ngModel)]="palabra.pista" name="pista"  id="pista">
        </div>

        <button type="submit" class="btn btn-default" (click)="crearahorcado(palabra)">Enviar</button>

      </form>
  </div>
</div>
	
	
	`,
	styles: [`
        .container {
            color: black;
			font: bold 30% monospace;
        }

		

    
    `]
})

@Injectable()

export class AppFormulario {



	palabra = new Palabra(11,"pepito","nosoypista");
 

  constructor(private heroeService:HeroeService){
    // Definimos el objeto usuario, vació inicialmente (necesario)
    };

crearahorcado() {

    this.heroeService.postPalabraHttp(this.palabra);
  }

  


  }

 

  


}
  