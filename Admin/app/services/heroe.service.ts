import {Injectable} from '@angular/core';
import {Palabra} from '../classes/palabra';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroeService {
    private headers = new Headers();

    constructor(private http: Http){
    }
/*
    getPalabrasHttp(): Promise<Palabra[]>{
        return this.http.get(this.ruta)
        .toPromise()
        .then(
            (response) => {
                let respuesta:any = response;
                let palabras: Palabra[] = JSON.parse(respuesta._body);
                return palabras;
            }
        ).catch()
    }
*/
    postPalabraHttp(palabra: Palabra): Promise<any>{

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let userinfo= localStorage.getItem('currentUser');
        let token= JSON.parse(userinfo);
        headers.append('Authorization',"Bearer "+token.token);
        console.log(palabra);

        let ruta:string = 'http://game.tcm.juanjofp.com/items/';
        return this.http.put(ruta,palabra,{headers: headers})
            .toPromise()
            .then(
                ()=> {}
            ).catch()
    }
}
