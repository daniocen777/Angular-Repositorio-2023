import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.loginForm = this._initForm();
  }

  ngOnInit(): void {

  }

  private _initForm(): FormGroup {
    return this.loginForm = this._fb.group({
      identifier: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmitForm(): void {
    if (this.loginForm.invalid) {
      console.log('Error');
      return;
    }
    // const data = { ...this.loginForm.value };

  }

}
