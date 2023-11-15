import { Component, Output, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Inscription, Person } from '../../interfaces/userInfo.interface';

@Component({
  selector: 'fullPage-component',
  templateUrl: './fullPage.component.html',
  styles: [
  ]
})
export class FullpageComponent implements OnInit {
  public sidebarItems = [
    { label: 'Mi Perfil', icon: 'perm_identity' },
    { label: 'Avances', icon: 'timeline', },
    { label: 'Ayuda', icon: 'help', },
    { label: 'Salir', icon: 'exit_to_app', },
  ]

  constructor(private cursosService: CursosService) { }

  @Output()
  public email?: string;

  @Output()
  public filteredCourses: Inscription[] = []

  @Output()
  public person: Person[] = []

  @Output()
  public courses: Inscription[] = []

  @Output()
  public incompletedCourses: Inscription[] = []

  ngOnInit(): void {
    this.cursosService.getUser()
      .subscribe(user => {
        this.email = user.email
        this.person = user.people
        this.courses = user.inscriptions
        for (let i = 0; i < this.courses.length; i++) {
          if (this.courses[i].advance < 100) {
            this.incompletedCourses.push(this.courses[i])
          }
        }
      })
  }

  get inscriptions(): Inscription[] {
    return this.cursosService.courses
  }

  filterInput(event: string): void {
    this.cursosService.filterInput(event)
    console.log(event);
  }



}
