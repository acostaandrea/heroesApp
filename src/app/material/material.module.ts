import { NgModule } from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule  } from "@angular/material/input";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
//importamops este modulo en heroes.module