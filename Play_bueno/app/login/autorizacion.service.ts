import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/rx';



@Injectable()
export class AuthService {

public token : string;

constructor(private http: Http){

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
}

login(username: string, password: string): Promise<boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //console.log("Estoy en el login");
   return this.http.post('http://game.tcm.juanjofp.com/auth/login', JSON.stringify({ user: username, password: password }),
   { headers: headers})
   .toPromise()
   .then((response: Response) => {
       
       console.log(response);

       let token = response.json() && response.json().token;
       if(token) {
        //console.log("Tengo el token");
           this.token = token;

           localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
           return true;
       }else{
        //console.log("No tengo el token");
           return false;
       }
    })
    .catch(this.handlerError);
   
}

logout(): void {

    this.token = null;
    localStorage.removeItem('currentUser');
}

    handlerError(error: Response){
        return Observable.throw(error.json().error || 'Server Error');
    }

}