import { Component, Input } from '@angular/core';
import { Inscription, Person } from '../../interfaces/userInfo.interface';

@Component({
  selector: 'info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'
  ]
})
export class InfoUserComponent {

  @Input()
  public person: Person[] = []

  @Input()
  public email?: string = ''

  @Input()
  public courses: Inscription[] = []

  @Input()
  public incompletedCourses: Inscription[] = []
}
