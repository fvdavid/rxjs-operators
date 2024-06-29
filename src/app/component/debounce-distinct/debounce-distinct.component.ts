import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

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
      switchMap(value => this.productService.loadUsersByPrefix(value)),
      map(search => {
        console.log('search ==> ', search);
      })
    )
  )
}
