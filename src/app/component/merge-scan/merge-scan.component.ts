import { Component } from '@angular/core';
import { Subject, fromEvent, merge, scan } from 'rxjs';
import { AsyncPipe, NgStyle } from '@angular/common';

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
    fromEvent<PointerEvent>(document, 'click'),
    this.reset$
  ).pipe(
    scan(
      (state: PointerEvent[], event) => event ? [...state, event] : [],
      []
    )
  );
}
