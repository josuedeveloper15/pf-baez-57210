import { Injectable } from '@angular/core';
import { Product } from '../../features/dashboard/products/models';
import { delay, Observable, of } from 'rxjs';
import { generateId } from '../../shared/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + '/products');
  }

  createProduct(product: Product) {
    return this.httpClient.post(environment.apiUrl + '/products', product);
  }

  editProductById(id: string, update: Partial<Product>) {
    // this.DATABASE = this.DATABASE.map((p) =>
    //   p.id === id ? { ...p, ...update } : p
    // );
    // return id;
    // const myCustomHeaders = new HttpHeaders({
    //   'x-access-token': 'aksdjasdjklasjkdaskldmlkas',
    // });

    return this.httpClient.put(environment.apiUrl + '/products/' + id, update, {
      // headers: myCustomHeaders,
      // params: {
      //   search: 'Mi busqueda',
      // },
    });
  }

  deleteProductById(id: string) {
    return this.httpClient.delete(environment.apiUrl + '/products/' + id);
  }
}
