import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
  @Input() categoryId!: number;
  products: Product[] = [];
  isLoading = false;

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryId']) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProductsByCategory(this.categoryId).subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Ошибка загрузки товаров:', err);
        this.isLoading = false;
      }
    });
  }

  onRemoveProduct(id: number): void {
    if (confirm('Удалить этот товар?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: (err: any) => console.error('Ошибка удаления:', err)
      });
    }
  }

  onLikeProduct(id: number): void {
    this.productService.likeProduct(id).subscribe({
      next: () => this.loadProducts(),
      error: (err: any) => console.error('Ошибка лайка:', err)
    });
  }
}