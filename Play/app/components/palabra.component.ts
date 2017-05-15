import { Component } from '@angular/core';

@Component({
    selector: 'palabras',
    template: `
        <h1>{{title}}</h1>
        <h2>{{pista}}</h2>
        <p class="colorTexto">Escriba</p>
        
        <input type="text" id="palabra" maxlength="1" #pal (keyup)="onKeyUp(pal.value)" />
        <br />
        Variable:{{palabra}}
        <br />
        Letra insertada local:{{pal.value}}

        

    `,
    styles: [`
        .colorTexto {
            color: blue;
        }
    
    `]

})

export class PalabraComponent {
    title = " prueba ";
    palabra = 'hola';
    pista = 'Aqui va la pista'
    numeroletras = this.palabra.length;
    cerrado = '-';

    onKeyUp(valor) {
        console.log(valor);


    }

}