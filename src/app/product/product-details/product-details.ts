import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CONTAINER_DATA } from '../container-desiccants';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  category: any;
  product: any;
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const categorySlug = this.route.snapshot.paramMap.get('category');
    const productSlug = this.route.snapshot.paramMap.get('product');

    this.category = CONTAINER_DATA.find(
      c => c.slug === categorySlug
    );

    if (!this.category) return;

    this.product = this.category.products.find(
      (p: any) => p.slug === productSlug
    );

    if (this.product?.images?.length) {
      this.selectedImage = this.product.images[0];
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
