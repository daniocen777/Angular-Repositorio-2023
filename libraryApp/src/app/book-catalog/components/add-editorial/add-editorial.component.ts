import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editorial } from '../list-editorial/list-editorial.component';

@Component({
  selector: 'app-add-editorial',
  templateUrl: './add-editorial.component.html',
  styleUrls: ['./add-editorial.component.scss']
})
export class AddEditorialComponent implements OnInit {

  constructor(private _dialog: MatDialogRef<AddEditorialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Editorial
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose(): void {
    this._dialog.close(false);
  }

  onSend(): void {
    this._dialog.close({ test: 'Mensaje de prueba' });
  }
}
