import { Product } from '../../products/models';

export interface Enrollment {
  id: string;
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

export interface CreateEnrollmentPayload {
  studentId: string;
  productId: string;
}
