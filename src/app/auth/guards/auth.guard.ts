import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad , CanActivate{

  constructor(private authService: AuthService, private router:Router){}

  


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean {
      return this.authService.verificaAutenticacion()
        .pipe(
          tap(estaAutenticado => {
            if(!estaAutenticado){
              this.router.navigate(['./auth/login'])
            }
          })
          )
        


  //     if(this.authService.auth.id){
  //       return true
  //     }
  //     console.log('bloqueado por authguard- CanActivate');
  //   return true;
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
        )

      // console.log('canLoad',true);
      // console.log(route);
      // console.log(segments);
      /*if(this.authService.auth.id){
        return true
      }
      console.log('bloqueado por authguard- CanLoad');
    return false;*/
  }
}

//el AuthGuard lo colocamos en elsistema de rutas prinicpales 

//canload solo sirve para prevenir que el usuario cargue el modulo