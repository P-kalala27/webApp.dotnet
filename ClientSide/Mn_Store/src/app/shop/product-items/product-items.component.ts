import { Component, Input } from '@angular/core';
import { Product } from 'src/app/share/models/products';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent {
  @Input() product? :Product;
}
