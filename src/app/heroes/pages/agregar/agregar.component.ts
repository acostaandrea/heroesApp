import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap  } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return
    }

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id)) //heroe es lo que retorna este opbservable
    )
    .subscribe(heroe => this.heroe = heroe )
  }

  guardar(){
    if(this.heroe.superhero.trim().length ===0 ){
      return
    }; //no se guarda si no se coloca al menos el nombre del superheroe

    if(this.heroe.id){
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe=> this.mostrarSnackbar('Registro actualizado')) 
    }else{
      //crear
      this.heroesService.agregarHeroe(this.heroe)
     .subscribe(heroe =>{
      this.router.navigate(['/heroes/editar', heroe.id]); //una vez que se crea y se pone guardar, navegamos hasta el heroe/id creado
      this.mostrarSnackbar('Registro creado')
    })
    }
     
    }

     borrarHeroe(){
      this.heroesService.borrarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes'])
      }) //una vez que elimina se redirige a heroes
  }

  mostrarSnackbar(mensaje:string):void{
    this.snackBar.open(mensaje,'ok!',{
      duration: 2500
    })
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

//para actualizar se hace una peticion put, agregar en el hreosService

//cuando se inserta se deberia poder nmavegar a otro lugar,para esto importamso el router

//hacer la excepcion en el imnagen.pipe
