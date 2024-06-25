import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editorial } from '../list-editorial/list-editorial.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-editorial',
  templateUrl: './add-editorial.component.html',
  styleUrls: ['./add-editorial.component.scss']
})
export class AddEditorialComponent implements OnInit, AfterViewInit {

  formEditorial!: FormGroup;

  constructor(private _dialog: MatDialogRef<AddEditorialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Editorial,
    private _formBuilder: FormBuilder,
    private _cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.formEditorial = this._formBuilder.group({
      id: [''],
      description: ['', [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.onEdit(this.data);
    }

    this._cdRef.detectChanges(); // evitar error de los cambios
  }

  onDisabled(): boolean {
    return this.formEditorial.invalid;
  }

  onSubmit(): void {
    this._dialog.close(this.formEditorial.value);
  }

  onEdit(editorial: Editorial): void {
    this.formEditorial.setValue({
      id: editorial.id,
      description: editorial.description
    });
  }
}
