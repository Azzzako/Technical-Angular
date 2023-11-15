import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inscription } from '../../interfaces/userInfo.interface';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html'
})

export class SearchbarComponent {

  constructor(private cursosService: CursosService) { }

  public searchInput: string = ''



  @Output()
  public onValue = new EventEmitter<string>()

  public selectedSort: string = 'noFilter'

  get inscriptions(): Inscription[] {
    return this.cursosService.courses
  }

  emitSearch(value: string): void {
    this.onValue.emit(value)
  }

  selectedSortBy(sort: string): void {
    if (this.selectedSort === sort) {
      this.selectedSort = 'noFilter'
      console.log(this.selectedSort);
    } else {
      this.selectedSort = sort
      console.log(this.selectedSort);

    }

    this.sortBy(this.selectedSort)
  }

  sortBy(value: string) {
    this.cursosService.sortBy(value)
  }

}
