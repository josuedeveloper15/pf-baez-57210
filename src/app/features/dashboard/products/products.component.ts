import { Component, OnInit } from '@angular/core';
import { Product } from './models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products.service';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  displayedColumns = ['id', 'name', 'price', 'actions'];
  productForm: FormGroup;

  editingProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (productsFromDB) => {
        this.products = productsFromDB;
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 404) {
            alert('Productos no encontrados');
          }
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      alert('El form es invalido');
    } else {
      if (!!this.editingProduct) {
        // esta editando....
        this.productsService
          .editProductById(this.editingProduct.id, this.productForm.value)
          .pipe(
            tap(() => {
              this.loadProducts();
              this.editingProduct = null;
            })
          )
          .subscribe();
      } else {
        // esta creando
        this.productsService
          .createProduct(this.productForm.value)
          .pipe(tap(() => this.loadProducts()))
          .subscribe();
      }

      this.productForm.reset();
    }
  }

  onDelete(id: string) {
    if (confirm('Esta seguro?')) {
      this.productsService
        .deleteProductById(id)
        .pipe(tap(() => this.loadProducts()))
        .subscribe();
    }
  }

  onEdit(editingProduct: Product) {
    this.editingProduct = editingProduct;

    this.productForm.patchValue(editingProduct);
  }
}
