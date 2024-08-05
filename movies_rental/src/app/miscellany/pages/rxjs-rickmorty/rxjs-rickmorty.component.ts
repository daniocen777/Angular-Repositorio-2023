import { Component, inject, OnInit } from '@angular/core';
import { filter, map, merge, Observable, of, switchMap } from 'rxjs';
import { Character, ResponseInfoResults } from '../../interfaces/character';
import { HttpClient } from '@angular/common/http';

// https://rxjs.dev/api

/* Tipos de operadores:
  - Creación
  - Transformación
  - Filtrado
  - Combinación
  - Agrupación
  - Error handling (excepciones)
  - Terminal (marcan el final de un observable)
 */

@Component({
  selector: 'app-rxjs-rickmorty',
  template: `
    <!-- <div *ngIf="data$ | async as myData">
      <ul>
        <li *ngFor="let item of myData">
          {{ item.name }}
        </li>
      </ul>
    </div> -->
    <!-- Un solo personaje -->
    <div *ngIf="data$ | async as item">
      <ul>
          {{ item.name }}
      </ul>
      </div>
    
  `,
  styleUrls: ['./rxjs-rickmorty.component.scss']
})
export class RxjsRickmortyComponent implements OnInit {
  data$!: Observable<Character>;

  private readonly API = 'https://rickandmortyapi.com/api/character';
  private readonly http = inject(HttpClient);

  numbers = of(1, 2, 3, 4, 5); // of => operador de creación
  numbers2 = of(10, 11, 12, 13); // of => operador de creación
  squareNumbers = this.numbers.pipe(
    map(x => x * x) // map => transforma la data
  )
  evenNumbers = this.numbers.pipe(
    filter(x => x % 2 === 0) // filter => filtra
  )
  // Unir dos observables
  // Concat => oporador parecido a merge pero lo hace secuencialmente (espera al primer observable se complete)
  mergeNumbers = merge(this.numbers, this.numbers2);

  ngOnInit(): void {
    /* this.data$ = this.http.get<ResponseInfoResults>(this.API)
      .pipe(
        map((response: ResponseInfoResults) => response.results)
      ); */

    // **** Hacer más de una petición (una que devuelva el ID y otra que use ese ID para buscar)
    // Se usa OPERADOR DE ORDEN SUPERIOR (operan sobre otros Observables) => switchMap para convertir los observables
    // pipe => encadena varios operadores en una sola llamada
    this.data$ = this.http.get<ResponseInfoResults>(this.API)
      .pipe(
        /* map((response: ResponseInfoResults) => response.results), */
        map(() => Math.floor(Math.random() * 20 + 1)),
        switchMap((id: number) => this.http.get<Character>(`${this.API}/${id}`)));

    // **** Operadores
    this.squareNumbers.subscribe(res => console.log("Elevado al cuadrado", res));
    this.evenNumbers.subscribe(res => console.log("Números pares", res));
    this.mergeNumbers.subscribe(res => console.log("Merge", res));
  }

}
