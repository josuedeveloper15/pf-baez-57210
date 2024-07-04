import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: [],
    });
  }

  onSubmit(): void {
    console.log(this.courseForm.value);

    this.matDialogRef.close(this.courseForm.value);
  }
}
