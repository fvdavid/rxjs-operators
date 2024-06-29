import { Component } from '@angular/core';
import { catchError, find, from, of, single } from 'rxjs';

@Component({
  selector: 'app-find-single',
  standalone: true,
  imports: [],
  templateUrl: './find-single.component.html',
  styleUrl: './find-single.component.scss'
})
export class FindSingleComponent {

  constructor() {
    from([1, 2, 3, 4, 5]).pipe(find(x => x === 15)).subscribe(valFind => {
      console.log('valFind ==> ', valFind);
    });

    from([1, 2, 3, 4, 5]).pipe(single(y => y === 15)).subscribe(valSingle => {
      console.log('valSingle ==> ', valSingle);
    });


    // use the catchError()
    from([1, 2, 3, 4, 5]).pipe(
      single((d) => d === 999),
      catchError((e) => of("Not Found with Single !!"))
    ).subscribe(singleWithError => {
      console.log('singleWithError ===> ', singleWithError);
    });

    from([1, 2, 3, 4, 5]).pipe(
      find((f) => f === 999),
      catchError((e) => of("Not Found with Find !!"))
    ).subscribe(findWithError => {
      console.log('findWithError ==> ', findWithError);
    });
  }
}
