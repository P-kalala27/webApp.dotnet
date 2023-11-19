import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    ShopComponent
  ]
})
export class ShopModule { }
