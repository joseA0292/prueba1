import {Injectable} from '@angular/core';
import {PALABRAS} from '../mocks/mock-heroes';
import {Palabra} from '../classes/palabra';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroeService {

    private ruta: string = 'http://127.0.0.1:8080/palabras/getPalabras';
    constructor(private http: Http){


    }

    getPalabras(): Promise<Palabra[]>{
        return Promise.resolve(PALABRAS);

    }

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
}

