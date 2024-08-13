import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Student } from '../../features/dashboard/enrollments/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private baseURL = environment.apiUrl + '/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL);
  }

  deleteStudentById(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseURL + '/' + id);
  }
}
