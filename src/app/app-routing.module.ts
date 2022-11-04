import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes : Routes = [
  {
    path: 'auth', //path que definimos para colocar todo el modulo de autenticacion
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )
    
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)  //porque estas son las rutas ppales
    
  ],
  exports: [
    RouterModule  //para que este a disposición de toda la aplicación
  ]
})
export class AppRoutingModule { }


//lo importamos en el app.module