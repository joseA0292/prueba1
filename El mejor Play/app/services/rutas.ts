import {NivelComponent} from '../components/nivel.component';
import {PruebaComponent} from '../components/prueba.component';
import { HomeComponent } from '../components/home.component';
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {SiguienteComponent} from '../components/siguiente.component'

const rutas: Routes = [
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'nivel',
    component: NivelComponent
},
{
    path: 'prueba',
    component: PruebaComponent
},
{
    path: 'siguiente/:id',
    component: SiguienteComponent
},

{
     path:'',
     redirectTo: '/home',
    pathMatch:'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);