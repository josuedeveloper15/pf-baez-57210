import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Course } from './models';
import { generateId } from '../../../shared/utils';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  nombreCurso = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];

  dataSource: Course[] = [];

  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('RECIBIMOS ESTE VALOR: ', value);

          this.nombreCurso = value.name;

          value['id'] = generateId(5);
          this.isLoading = true;
          this.coursesService.addCourse(value).subscribe({
            next: (courses) => {
              this.dataSource = [...courses];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

  editCourse(editingCourse: Course) {
    this.matDialog
      .open(CourseDialogComponent, { data: editingCourse })
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (!!value) {
            this.coursesService
              .editCourseById(editingCourse.id, value)
              .subscribe({
                next: (courses) => {
                  this.dataSource = [...courses];
                },
              });
          }
        },
      });
  }

  deleteCourseById(id: string) {
    if (confirm('Esta seguro?')) {
      this.isLoading = true;

      this.coursesService.deleteCourseById(id).subscribe({
        next: (courses) => {
          this.dataSource = [...courses];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
