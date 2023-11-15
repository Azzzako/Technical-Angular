import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscription, UserInfo } from '../interfaces/userInfo.interface';
import { Observable, map, pipe, tap } from 'rxjs';
import { environments } from 'src/app/environments/environments';

@Injectable({ providedIn: 'root' })
export class CursosService {
  constructor(private http: HttpClient) { }

  private baseURL = environments.baseURL
  private inscriptions: Inscription[] = []
  private filteredInscriptions: Inscription[] = []

  get courses(): Inscription[] {
    return structuredClone(this.filteredInscriptions)
  }

  getUser(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.baseURL}`)
      .pipe(
        tap(course => this.inscriptions = course.inscriptions),
        tap(course => this.filteredInscriptions = course.inscriptions)
      )
  }

  filterInput(event: string): Inscription[] {
    return this.filteredInscriptions = event.length > 0 ? this.filteredInscriptions.filter
      (cur => cur.course.name.toLowerCase().includes(event.toLowerCase()) ||
        cur.course.sector.name.toLowerCase().includes(event.toLowerCase()))
      :
      this.filteredInscriptions = this.inscriptions
  }

  sortBy(value: string) {
    switch (value) {
      case 'az':
        this.filteredInscriptions = this.filteredInscriptions.filter(curso => curso).sort((a, b) => a.course.name > b.course.name ? 1 : -1)
        break

      case 'complete':
        this.filteredInscriptions = this.filteredInscriptions.filter(curso => curso.advance === 100).sort((a, b) => new Date(a.inscripcionDate).getTime() > new Date(b.inscripcionDate).getTime() ? 1 : -1)
        break

      case 'incomplete':
        this.filteredInscriptions = this.filteredInscriptions.filter(curso => curso.advance < 100).sort((a, b) => new Date(a.inscripcionDate).getTime() > new Date(b.inscripcionDate).getTime() ? 1 : -1)
        break

      case 'noFilter':
        this.filteredInscriptions = this.inscriptions
        console.log(this.filteredInscriptions);
        break

      default:
         this.filteredInscriptions = this.inscriptions
         break
    }
  }
}

