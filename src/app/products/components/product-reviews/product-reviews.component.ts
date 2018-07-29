import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { ProductReviewsModel } from './product-reviews.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  reviews$: Promise<ProductReviewsModel[]>;

  constructor(
    public productService: ProductsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.reviews$ = this.productService.getReviews(id);
    }
  }
}
