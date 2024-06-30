import { Component } from '@angular/core';
import { EMPTY, delay, exhaustMap, expand, fromEvent, interval, map, of, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-expand',
  standalone: true,
  imports: [],
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.scss'
})
export class ExpandComponent {

  constructor() {
    const clicks = fromEvent(document, 'click');
    const powersOfTwo = clicks.pipe(
      map(() => 1),
      expand(x => of(2 * x).pipe(delay(1000))),
      take(10)
    );
    powersOfTwo.subscribe(x => {
      console.log('x ==> ', x)
    });
  }
}
