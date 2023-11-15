import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './components/cursosList/cursos.component';
import { MaterialModule } from '../material/material.module';
import { FullpageComponent } from './pages/cursos/fullPage.component';
import { InfoUserComponent } from './components/info-user/info-user.component';



@NgModule({
  declarations: [
    CursosComponent,
    InfoUserComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
  ],
  exports: [
    CursosComponent,
    InfoUserComponent
  ]
})
export class CursosListModule { }
