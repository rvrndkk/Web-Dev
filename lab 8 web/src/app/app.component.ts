import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  template: `

    <div class="app-container">

      <header>
        <h1>Интернет-магазин</h1>
        <nav>
          <a routerLink="/">Главная</a>
          <a routerLink="/add-product">Добавить товар</a>
          <a routerLink="/test">Тестовая страница</a>
        </nav>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>


      <footer>
        <p>© 2023 Магазин</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    header {
      background: #1976d2;
      color: white;
      padding: 1rem;
    }
    
    nav {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 4px;
    }
    
    nav a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    main {
      flex: 1;
      padding: 1rem;
    }
    
    footer {
      background: #f5f5f5;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class AppComponent {
  constructor() {
    console.log('Приложение инициализировано');
  }
}