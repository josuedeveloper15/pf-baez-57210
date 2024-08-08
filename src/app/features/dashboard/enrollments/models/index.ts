import { Product } from '../../products/models';

export interface Enrollment {
  studentId: string;
  productId: string;
}

export interface Student {
  id: string;
  name: string;
}

export interface LoadStudentsAndProductsResponse {
  students: Student[];
  products: Product[];
}
