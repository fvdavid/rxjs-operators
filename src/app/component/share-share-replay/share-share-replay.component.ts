import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, share, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-share-share-replay',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './share-share-replay.component.html',
  styleUrl: './share-share-replay.component.scss'
})
export class ShareShareReplayComponent implements OnInit {

  flag = false;
  flagFinalize = false;

  subject = new BehaviorSubject(0);

  readonly count$ = this.subject.pipe(
    tap({
      next: (t) => console.log('I get next value of count', t),
      complete: () => console.log('complete count'),
      finalize: () => console.log('finalize count'),
    }),

    // share(), // 👈
    shareReplay({ bufferSize: 1, refCount: false })
  );

  readonly count1$ = this.count$.pipe(
    tap({
      next: (t) => console.log('I get next value of count1', t),
      complete: () => console.log('complete count1'),
      finalize: () => console.log('finalize count1'),
    }),
    map((c) => `count1: ${c}`)
  );
  readonly count2$ = this.count$.pipe(
    tap({
      next: (t) => console.log('I get next value count2', t),
      complete: () => console.log('complete count2'),
      finalize: () => console.log('finalize count2'),
    }),
    map((c) => `count2: ${c}`)
  );

  ngOnInit(): void {
    setTimeout(() => {
      this.flag = true;
    }, 1000);
  }

}
