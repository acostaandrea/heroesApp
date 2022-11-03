import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe ) { }

  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true) //para decir que si quiere borrar
  }

  cerrar(){
    this.dialogRef.close()
  }

}

//inyectamos en el constructor matdialogRef para cerrar la ventana, el tipo es igual al componente
