import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Course } from './models';
import { generateId } from '../../../shared/utils';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  nombreCurso = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];

  dataSource: Course[] = [
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

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('RECIBIMOS ESTE VALOR: ', value);

          this.nombreCurso = value.name;

          value['id'] = generateId(5);
          this.dataSource = [...this.dataSource, value];
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
            this.dataSource = this.dataSource.map((el) =>
              el.id === editingCourse.id
                ? { ...value, id: editingCourse.id }
                : el
            );
          }
        },
      });
  }

  deleteCourseById(id: string) {
    if (confirm('Esta seguro?')) {
      this.dataSource = this.dataSource.filter((el) => el.id != id);
    }
  }
}
