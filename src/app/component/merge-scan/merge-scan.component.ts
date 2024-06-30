import { Component } from '@angular/core';
import { Subject, fromEvent, map, merge, scan } from 'rxjs';
import { AsyncPipe, NgStyle } from '@angular/common';
import { state } from '@angular/animations';

@Component({
  selector: 'app-merge-scan',
  standalone: true,
  imports: [
    AsyncPipe,
    NgStyle
  ],
  templateUrl: './merge-scan.component.html',
  styleUrl: './merge-scan.component.scss'
})
export class MergeScanComponent {

  reset$ = new Subject<void>();
  clicks$ = merge(
    fromEvent<PointerEvent>(document, 'click').pipe(
      map(accumulationHandler)
    ),
    this.reset$.pipe(
      map(resetHandler)
    )
  ).pipe(
    scan(
      (state: PointerEvent[], stateHandlerFn) => stateHandlerFn(state),
      []
    )
  );
}


const accumulationHandler =
  (event: PointerEvent) => 
    (state: PointerEvent[]) => [...state, event]

const resetHandler =
  (event: void) => (state: PointerEvent[]) => []