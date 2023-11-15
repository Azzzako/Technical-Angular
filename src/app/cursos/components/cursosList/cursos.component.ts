import { Component, Input  } from '@angular/core';
import { Inscription } from '../../interfaces/userInfo.interface';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'list-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: [ './cursos.component.css'  ]
})
export class CursosComponent {

  constructor(private cursosService: CursosService){}
  get inscriptions(): Inscription[] | undefined {
    return this.cursosService.courses
  }
}
