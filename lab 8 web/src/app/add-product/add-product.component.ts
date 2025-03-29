import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  categories: Category[] = [];


  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: [''],
    count: [1, [Validators.required, Validators.min(1)]],
    category: ['', Validators.required]
  });

  constructor() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productService.createProduct({
        name: formData.name!,
        price: formData.price!,
        description: formData.description || '',
        count: formData.count!,
        category: Number(formData.category!),
        is_active: true,
        likes: 0
      }).subscribe({
        next: () => alert('Товар успешно добавлен!'),
        error: (err) => console.error('Ошибка:', err)
      });
    }
  }
}