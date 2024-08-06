import { Component, inject, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { User } from '../../interfaces/user';
import { SearchService } from '../../services/search.service';

/* switchmap => Permite cambiar a un nuevo observable. Útil para
  cancelar operaciones en curso y comenzar una nueva operacion basada
  en el valor emitido más reciente
 */

@Component({
  selector: 'app-rxjs-switchmap-operator',
  templateUrl: './rxjs-switchmap-operator.component.html',
  styleUrls: ['./rxjs-switchmap-operator.component.scss']
})
export class RxjsSwitchmapOperatorComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  result$!: Observable<User>;
  private searchSvc = inject(SearchService);

  constructor() {
    this.result$ = this.searchTerm$.pipe(
      switchMap((term: string) => this.searchSvc.search$(term))
    );
  }

  ngOnInit(): void {
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

}
