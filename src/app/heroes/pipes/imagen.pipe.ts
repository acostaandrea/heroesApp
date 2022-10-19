import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { HeroeComponent } from '../pages/heroe/heroe.component';


@Pipe({
  name: 'imagen',
  //pure: false //para que se dispare cada vez que cambie el pipe
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string{

     
   if(!heroe.id && !heroe.alt_img ){         
     return `assets/no-image.png`;
   }else if( heroe.alt_img){
       return heroe.alt_img;
   }else{           
       //console.log(heroe);
        return  `assets/heroes/${heroe.id}.jpg`;
    }

  // if(!heroe.id || (heroe.hasOwnProperty('alt_img') && !heroe.alt_img)){
  //    return 'assets/no-image.png';
  // }
  //  return  `assets/heroes/${heroe.id}.jpg`;
 
}

    
  }

