import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private MY_DATABASE = [
    {
      id: 'jDcd2',
      name: 'Angular',
      endDate: new Date(),
      startDate: new Date(),
    },
    {
      id: 'jDcd3',
      name: 'Javascript',
      endDate: new Date(),
      startDate: new Date(),
    },
    {
      id: 'jDcd5',
      name: 'Photoshop',
      endDate: new Date(),
      startDate: new Date(),
    },
  ];

  editCourseById(id: string, update: Course) {
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.id === id ? { ...update, id } : el
    );
    return this.getCourses();
  }

  searchCoursesByName(search: string): Observable<Course[]> {
    return this.getCourses().pipe(
      map((todosCursos) =>
        todosCursos.filter((curso) =>
          curso.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  getCourses(): Observable<Course[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 500);
    });
  }

  getCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
    );
  }

  addCourse(course: Course): Observable<Course[]> {
    this.MY_DATABASE.push(course);
    return this.getCourses();
  }

  deleteCourseById(id: string): Observable<Course[]> {
    this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.id != id);
    return this.getCourses();
  }
}
