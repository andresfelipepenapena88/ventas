import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts();
  }

  ngOnDestroy(): void {
    this.productService.closeSubscriptions();
  }

}
