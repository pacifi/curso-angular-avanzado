import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';

import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  readonly $product = input.required<Product>({ alias: 'product' });

  readonly addToCart = output<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.$product());
  }
}
