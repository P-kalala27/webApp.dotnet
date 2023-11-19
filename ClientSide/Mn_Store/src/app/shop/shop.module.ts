import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ShopRoutingModule
  ],
 
})
export class ShopModule { }
