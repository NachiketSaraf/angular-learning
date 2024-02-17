import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/productService/product.service';
import { Product } from '../../../model/product.model';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productsArr : Product[]=[];

  constructor(public productService: ProductService){
  }


  ngOnInit() {
    this.productService.getProducts()
    .subscribe(({products}) => {
      this.productsArr = products;
    }

    )
    
  }
  

}


