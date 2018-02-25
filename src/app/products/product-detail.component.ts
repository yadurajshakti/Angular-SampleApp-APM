import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.product = {
      "productId": id,
      "productName": "Horse Cart",
      "productCode": "GDN-0083",
      "releaseDate": "Feb 26, 2018",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.5,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"

    }
    
  }

}
