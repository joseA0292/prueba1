import {NivelComponent} from '../components/nivel.component';
import {PruebaComponent} from '../components/prueba.component';
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

const rutas: Routes = [
{
    path: 'nivel',
    component: NivelComponent
},
{
    path: 'prueba',
    component: PruebaComponent
},
{
     path:'',
     redirectTo: '/nivel',
    pathMatch:'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);