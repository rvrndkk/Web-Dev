import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { CategoryService } from '../category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories: Category[]) => {
        this.categories = categories;
        if (this.categories.length > 0) {
          this.selectCategory(this.categories[0].id);
        }
      },
      error: (err: any) => console.error('Ошибка загрузки категорий:', err)
    });
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
}