import {Injectable} from '@angular/core';
import {Palabra} from '../classes/palabra';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroeService {

    private ruta: string = 'http://127.0.0.1:8080/palabras/getPalabras';
    private header = new Headers({'content-type': 'application/json'});
    constructor(private http: Http){


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
    postPalabraHttp(palabra: Palabra): Promise<any>{
        let ruta:string = 'http://127.0.0.1:8080/palabras/putPalabra';
        return this.http.post(ruta,palabra,this.header)
            .toPromise().then(
                ()=> 'la palabra se ha guardado correctamente'
                

            ).catch()

    }
}
