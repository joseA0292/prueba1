import {Injectable} from '@angular/core';
import {Palabra} from '../classes/palabra';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroeService {

    constructor(private http: Http){

    }

    getPalabrasHttp(): Promise<Palabra[]>{
         let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let userinfo = localStorage.getItem('currentUser');
        let token = JSON.parse(userinfo);
        headers.append('Authorization', "Bearer "+token.token);
        
        console.log("esto es" + token.token)

        let ruta: string = 'http://game.tcm.juanjofp.com/items';
        return this.http.get(ruta,{ headers: headers})
        .toPromise()
        .then(
            (response) => {
                
                let respuesta:any = response;
                console.log(respuesta)
                let palabras: Palabra[] = JSON.parse(respuesta._body);
                return palabras;
            }
        ).catch()
    }
}

