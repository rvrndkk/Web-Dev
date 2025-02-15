import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Products'; // Add this line
}
