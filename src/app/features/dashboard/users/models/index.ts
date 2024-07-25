export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface User {
  email: string;
  password: string;
  role: UserRole;
}
