import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { bufferCount, bufferTime } from 'rxjs';

@Component({
  selector: 'app-buffer',
  standalone: true,
  imports: [],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss',
  providers: [
    ProductService
  ]
})
export class BufferComponent {

  private productService = inject(ProductService);

  constructor() {
    this.productService.getProducts().pipe(
      bufferTime(200),

      // bufferCount not work for this example, cause the length only 1
      // bufferCount(3)
    ).subscribe(product => {
      console.log('product ==> ', product);
    });

  }
}
