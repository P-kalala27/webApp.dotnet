import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Brand } from '../share/models/brand';
import { Product } from '../share/models/products';
import { ShopParams } from '../share/models/shopParams';
import { Type } from '../share/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @ViewChild('search')searchTerms?: ElementRef;

  products :Product []= [];

  brands : Brand[]= [];

  types: Type[]=[];
 
  shopParams = new ShopParams();

  sortOptions =[
    {name :'Alphabetical', value: 'name'},
    {name :'Price: Low to High', value: 'priceAsc'},
    {name :'Price: High to Low', value: 'priceDesc'}
  ];

  totalCount =0;

  constructor(private shopService : ShopService){}

  ngOnInit(): void {
    this.getBrands();
    this.getProducts();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next: Response=> {
        this.products = Response.data;
        this.shopParams.pageNumber = Response.pageIndex;
        this.shopParams.pageSize = Response.pageSize;
        this.totalCount = Response.count;
      },
      error: Error => console.log(Error), 
    })
  }
  getBrands(){
    this.shopService.getBrands().subscribe({
      next: Response=> this.brands = [{id: 0, name:'All'}, ...Response],
      error: Error => console.log(Error), 
    })
  }
  getTypes(){
    this.shopService.getTypes().subscribe({
      next: Response=> this.types = [{id: 0, name:'All'}, ...Response],
      error: Error => console.log(Error), 
    })
  }
  onBrandIdSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }


  onTypeIdSelecetd(typeId: number){
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any){
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event : any){
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  //pour la recherche des elements

  onSearch(){
    this.shopParams.search = this.searchTerms?.nativeElement.value
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset(){
    if(this.searchTerms) this.searchTerms.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts()
  }

}
