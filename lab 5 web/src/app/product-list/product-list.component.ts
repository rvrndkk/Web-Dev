import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categoryName: string | null = '';
  products: Product[] = [];

  allProducts = {
    Электроника: [
      { 
        name: 'Смартфон Apple iPhone 13 128Gb черный', 
        description: 'Мощный смартфон с отличной камерой и производительностью.', 
        price: 273365, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Смартфон Apple iPhone 16 128Gb черный', 
        description: 'Новейший флагман с инновационными технологиями.', 
        price: 416838, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ сиреневый', 
        description: 'Стильный и мощный смартфон с поддержкой 5G.', 
        price: 185985, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый', 
        description: 'Отличный планшет для работы и развлечений.', 
        price: 99854, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6"', 
        description: 'Мощный игровой ноутбук с передовым железом.', 
        price: 529740, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium', 
        likes: 0 
      }
    ],
    Одежда: [
      { 
        name: 'Жилет Adidas черный', 
        description: 'Стильный и теплый жилет для холодной погоды.', 
        price: 25990, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/h1c/65422771814430.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Футболка Adidas черный', 
        description: 'Классическая черная футболка с логотипом Adidas.', 
        price: 8990, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h51/ha3/87041976008734.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Демисезонная куртка Adidas черный', 
        description: 'Легкая, но теплая куртка для осенне-зимнего сезона.', 
        price: 38990, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h87/85143591682078.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Футболка Adidas белый', 
        description: 'Удобная и стильная футболка для повседневной носки.', 
        price: 34854, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/h23/84584116617246.jpg?format=gallery-medium', 
        likes: 0 
      }
    ],
    Аудиотехника: [
      { 
        name: 'Наушники Edifier W820NB Plus серый', 
        description: 'Беспроводные наушники с шумоподавлением и отличным звуком.', 
        price: 23261, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc3/81797687869470.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Наушники Samsung Galaxy Buds FE серый', 
        description: 'Компактные и удобные TWS-наушники с глубоким басом.', 
        price: 28999, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h1b/84329424781342.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Наушники Xiaomi Redmi Buds 6 Active белый', 
        description: 'Доступные беспроводные наушники с хорошим звуком.', 
        price: 7479, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/pac/7469560.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Наушники Apple AirPods 2 with Lightning белый', 
        description: 'Культовые беспроводные наушники с удобной посадкой.', 
        price: 53271, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Наушники Marshall Major IV черный', 
        description: 'Стильные и мощные наушники с фирменным звуком Marshall.', 
        price: 30774, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', 
        likes: 0 
      }
    ],
    Спорт: [
      { 
        name: 'Лонгборд Eastcoast Malibu голубой 37', 
        description: 'Легкий и маневренный лонгборд для комфортного катания.', 
        price: 59900, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/hb1/64160988725278.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Скейтборд AOB Mandala 201205 мультиколор 39 дюйм', 
        description: 'Классический скейтборд для трюков и городского катания.', 
        price: 44900, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd1/85351467319326.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Скейтборд Eastcoast Nazare EC201904 мультиколор 38 дюйм', 
        description: 'Прочный и надежный скейтборд для начинающих и профи.', 
        price: 61900, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h95/85350431326238.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Лонгборд Santa-Cruz Shark Dot 11115969 мультиколор 39 дюйм', 
        description: 'Стильный и удобный лонгборд для комфортного катания.', 
        price: 61900, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p6e/24828827.jpg?format=gallery-medium', 
        likes: 0 
      },
      { 
        name: 'Лонгборд Termit S6X6QI3XCM черный 38.4 дюйм', 
        description: 'Прочный лонгборд для скоростных спусков и трюков.', 
        price: 59990, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/he9/85607782121502.jpg?format=gallery-medium', 
        likes: 5252 
      }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name');
      this.products = this.allProducts[this.categoryName as keyof typeof this.allProducts] || [];
    });
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
