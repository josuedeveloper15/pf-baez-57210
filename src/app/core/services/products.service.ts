import { Injectable } from '@angular/core';
import { Product } from '../../features/dashboard/products/models';
import { delay, Observable, of } from 'rxjs';
import { generateId } from '../../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private DATABASE: Product[] = [
    {
      id: 'akdjv3',
      name: 'PC Gamer',
      price: 9999,
    },
    {
      id: 'akdjv4',
      name: 'Play 5',
      price: 1000,
    },
  ];

  getProducts(): Observable<Product[]> {
    return of([...this.DATABASE]).pipe(delay(500));
  }

  createProduct(product: Product) {
    product.id = generateId(6);
    this.DATABASE.push(product);
    return product;
  }

  editProductById(id: string, update: Partial<Product>) {
    this.DATABASE = this.DATABASE.map((p) =>
      p.id === id ? { ...p, ...update } : p
    );

    return id;
  }

  deleteProductById(id: string) {
    this.DATABASE = this.DATABASE.filter((p) => p.id !== id);
    return id;
  }
}
