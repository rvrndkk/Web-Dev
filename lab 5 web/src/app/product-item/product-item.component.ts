import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<void>();

  likeProduct() {
    this.product.likes++;
  }

  shareOnWhatsApp() {
    const text = `Смотри что нашел: ${this.product.name}!\n\n${this.product.description}\n\n Цена: ₸${this.product.price}\n\n вот: ${this.product.image}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const text = `Смотри что нашел: ${this.product.name}!\n\n${this.product.description}\n\n Цена: ₸${this.product.price}\n\n вот: ${this.product.image}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.image)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
