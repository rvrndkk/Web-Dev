import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 13 128Gb',
      description: 'Мощный смартфон с отличной камерой и производительностью.',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Смартфон Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
      description: 'Современный смартфон с поддержкой 5G и отличным экраном.',
      rating: 3.5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/85429009350686.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h86/85429009416222.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000'
    },
    {
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ синий',
      description: 'Бюджетный смартфон с хорошей батареей и мощным процессором.',
      rating: 2.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h7d/84526692630558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h4b/84526692696094.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      name: 'Смартфон Redmi 14C NFC 8 ГБ/256 ГБ черный',
      description: 'Смартфон с поддержкой NFC и большим объемом памяти.',
      rating: 2.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p6b/7253918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p6b/7253919.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p6d/7253920.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-14c-nfc-8-gb-256-gb-chernyi-123624586/?c=750000000'
    },
    {
      name: 'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/256 ГБ черный',
      description: 'Флагманский смартфон Samsung с высокой производительностью.',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pc3/1610165.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro 256Gb черный',
      description: 'Флагман от Apple с улучшенной камерой и процессором.',
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hd9/87295483478046.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h94/87295483510814.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 15 128Gb голубой',
      description: 'Яркий и стильный смартфон с мощным процессором.',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    }
    ,
    {
      name: 'Смартфон Apple iPhone 16 256Gb черный',
      description: 'Флагманский смартфон от Apple с мощным процессором и улучшенной камерой.',
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/he1/87295472828446.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hcb/87295472861214.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000'
    },
    {
      name: 'Смартфон Poco X7 Pro 12 ГБ/512 ГБ черный',
      description: 'Мощный игровой смартфон с высокой производительностью и большим объемом памяти.',
      rating: 4.6,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p1f/19792401.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p22/19792402.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p3a/19792409.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000'
    },
    {
      name: 'Смартфон HONOR X9c 12 ГБ/256 ГБ черный',
      description: 'Современный смартфон с прочным экраном и быстрой зарядкой.',
      rating: 3.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p79/10900265.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/p78/10900267.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/p75/10900276.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/honor-x9c-12-gb-256-gb-chernyi-130777157/?c=750000000'
    },
    {
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Доступный смартфон с хорошей автономностью и большим экраном.',
      rating: 3.6,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      name: 'Смартфон Samsung Galaxy Z Fold6 5G 12 ГБ/1024 ГБ черный',
      description: 'Складной смартфон с передовыми технологиями и большим экраном.',
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/p70/1235897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p70/1235896.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa7/pba/1235901.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold6-5g-12-gb-1024-gb-chernyi-128060913/?c=750000000'
    }
  ];

  shareOnWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
