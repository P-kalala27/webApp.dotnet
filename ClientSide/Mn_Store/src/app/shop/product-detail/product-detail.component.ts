import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/share/models/products';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product? : Product;

  constructor(private shopService : ShopService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.loadProduct();
  }
  loadProduct(){
    const id= this.activatedRoute.snapshot.paramMap.get('id')
    if(id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product ,
      error: error => console.log(error)
      
    })
  }

}
