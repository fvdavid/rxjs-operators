import { Component, inject } from '@angular/core';
import { defaultIfEmpty, first, take } from 'rxjs';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-take-first',
  standalone: true,
  imports: [],
  templateUrl: './take-first.component.html',
  styleUrl: './take-first.component.scss',
  providers: [
    ProductService
  ]
})
export class TakeFirstComponent {

  // first will deliver an EmptyError to the Observer's error callback 
  // if the Observable completes before any next notification was sent. 
  // If you don't want this behavior, use take(1) instead.

  private productService = inject(ProductService);

  constructor() {

    // first() operator and handle errors if needed, 
    // but the errors are thrown only if use the EMPTY observable which immediately completes.
    this.productService.getProducts().pipe(first()).subscribe(first => {
      console.log('first ==> ', first);
    });

    // the defaultIfEmpty() operator with first() to ensure that no errors will be thrown when using EMPTY constant.
    this.productService.getProducts().pipe(
      defaultIfEmpty("No Products"),
      first()
    ).subscribe(firstWithNoError => {
      console.log('first With No Error ==> ', firstWithNoError);
    })

    this.productService.getProducts().pipe(take(1)).subscribe(take => {
      console.log('take(0) ===> ', take);
    })
  }
}
