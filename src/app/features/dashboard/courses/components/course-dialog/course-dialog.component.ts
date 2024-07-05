import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
    });
  }

  onSubmit(): void {
    this.matDialogRef.close(this.courseForm.value);
  }
}
