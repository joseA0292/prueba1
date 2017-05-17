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
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'my-next',		//Se usa como tag html
	//template: 'app/app.component.html'
	templateUrl: 'app/components/vistas/siguiente.html'
})

@Injectable()
export class SiguienteComponent {	
    id : number;
	constructor(private router: Router, private route: ActivatedRoute){

		
	}
	
ngOnInit() {
    // subscripción al observable params
    this.route.params
      .subscribe(params => {
        this.id = params['id'].toString();

      });
      console.log(this.id);
  }

onSubmit(){
this.router.navigate(['/nivel']);
}

goHome(){
this.router.navigate(['/home']);   
}

}
