import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap  } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers =[
    {id: 'DC Comics',
    desc:'DC-Comics'  
  },
  {
    id: 'Marvel Comics',
    desc:'Marvel-Comics'
  }
  ];

  heroe: Heroe= {
    superhero: '',
    alter_ego: '',
    characters:'',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id)) //heroe es lo que retorna este opbservable
    )
    .subscribe(heroe => this.heroe = heroe )
  }

  guardar(){
    if(this.heroe.superhero.trim().length ===0 ){
      return
    };

    if(this.heroe.id){
      //actualizar
    }else{
      //crear
    }

  //   this.heroesService.agregarHeroe(this.heroe)
  //   .subscribe(resp =>{
  //     console.log('Respuesta', resp);
  //   })
  }

  

}

//para llamar a la base de datos hay que hacer una peticion post a nuestra api, hay que llmar desde nuestro servicio a nuestro rest api 
//en postman hacemos la peticion post, en el body lo mandamos como un x-www-form-urlencoded o como un raw en json
//creamos funcion agregar en el service
//this.heroesService.agregarHeroe(this.heroe) el heroe es el que estamos modificando, para que se dispare ponemos el subscribe

//para leer el heroe de la url agregamos activatedRoute en el constructor

//en el ngOnInit verificamos el url

//para hacer la trsnfotmacion importamos switchMap

//si el objeto tiene id significa que estamos editando, si no tiene significa que estamos creando
