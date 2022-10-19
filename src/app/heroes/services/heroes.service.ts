import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id: string) : Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino: string) : Observable<Heroe[]>{ //es un observable que emite un arreglo en forma de Heroe
    
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)


  }

  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  borrarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }

}

//hacemos uso del servicio con el httpClient

//en el listado.ts consumimos el get heroes

//get es de tipo heroe como la interface y entre [] porque es una coleccionm de heroes

// sacamos los http de getHeroe y lo ponemos en los environments.ts, luego generamos una variable de entorno baseUrl (mirar que elenvironment importado no sea de prudccion sino de desarrollo)

//termino es lo que la persona esta buscando

//el post es para agregar al json, despues de agregarHeroe, inyectamos el servicio an agregar.component.ts