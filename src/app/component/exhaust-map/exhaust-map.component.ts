import { Component } from '@angular/core';
import { exhaustMap, interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent {

  firstInterval = interval(1000).pipe(take(14));
  secondInterval = interval(1000).pipe(take(2));

  exhaustSub = toSignal(
    this.firstInterval.pipe(
      exhaustMap(f => {
        console.log(`Emission Corrected of first interval: ${f}`);
        return this.secondInterval;
      })
    )
  )
}
