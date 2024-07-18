import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models';
import { CoursesService } from '../../../../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  curso$: Observable<Course | undefined>;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.curso$ = this.coursesService.getCourseById(
      this.activatedRoute.snapshot.params['id']
    );
  }
}
