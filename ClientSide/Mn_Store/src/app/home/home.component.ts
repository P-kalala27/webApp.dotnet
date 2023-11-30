import { Component } from '@angular/core';
import { products } from 'src/env/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cloth :any;
  ngOnInit(): void {
    this.cloth=products;
  }

}
