import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
    });

    if (this.editingCourse) {
      this.courseForm.patchValue(this.editingCourse);
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {
      /// mostar error
    }
  }
}
