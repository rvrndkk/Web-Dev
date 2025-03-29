import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TestButtonComponent } from './test/test-button.component';

export const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'test', component: TestButtonComponent }
];