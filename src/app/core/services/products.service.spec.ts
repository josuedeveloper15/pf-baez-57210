import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Product } from '../../features/dashboard/products/models';

describe('ProductService', () => {
  let service: ProductsService;
  let router: Router;

  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockProvider(Router)],
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
    router = TestBed.inject(Router);
  });

  it('Al llamar get products se debe ejecutar una peticion HTTP a /products', () => {
    const mockedResponse: Product[] = [
      {
        id: 'abc123',
        name: 'Producto Mock',
        price: 12345,
      },
    ];

    service.getProducts().subscribe({
      next: (res) => {
        expect(res).toEqual(mockedResponse);
      },
    });

    httpController
      .expectOne({
        url: environment.apiUrl + '/products',
        method: 'GET',
      })
      .flush(mockedResponse);
  });
});
