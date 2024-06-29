import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-distinct',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './debounce-distinct.component.html',
  styleUrl: './debounce-distinct.component.scss',
  providers: [
    ProductService
  ]
})
export class DebounceDistinctComponent {

  searchControl = new FormControl('', { nonNullable: true });
  private productService = inject(ProductService);

  loadedUsers = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(500), // wait 500ms after user input to send data
      distinctUntilChanged(), // don't send the same value if not changed

      switchMap(value => this.productService.loadUsersByPrefix(value).pipe(
        // even if you receive an Error, your search functionality will still continue working.
        catchError(() => EMPTY)
      )),


      map(search => {
        console.log('search ==> ', search);
      }),

      // This will have a side-effect that once you receive an error - your search will STOP working. 
      // Even if you type something into the input field again (after getting an error),
      // it will not make additional API calls, since your chain has already errored out (and you handled it).
      catchError(() => EMPTY)
    )
  )
}
