import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  heroes: Heroe[] =[]  //estos heroes son los que voy a estar mostrando

  heroeSeleccionado : Heroe | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }



  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())  //trim para quitar los espacios antes y despues del texto
    .subscribe(heroes => this.heroes= heroes);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent){   //lo obtenemos haciendo clg de event y lo importamos de material
    // console.log(event);

    if(!event.option.value){
      this.heroeSeleccionado = undefined
      return
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero

    this.heroesService.getHeroePorId(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe)

}
}

//creamos un nuevo metodo en el wserivcio
