import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes =[
  {
    path: '',  //vacio porque el app.routing es el que decide que modulo va aca
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path:'**', //cualquier ruta que no sea las anteriores, redirecciona a
        redirectTo: 'login'
      }
    ]
  
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes) //porque son rutas hijas
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }

//estos modulos estan alojados de manera independiente, lo importamos en auth.module
