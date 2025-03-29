// product.model.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    count: number;
    is_active: boolean;
    likes: number;
    category: number;
  }