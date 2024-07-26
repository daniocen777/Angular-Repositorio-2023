import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  ngOnInit(): void {
  }

  validateFields(value: string) {
    let term = this.loginForm.controls[value].errors && this.loginForm.controls[value].touched;
    console.log("Dato", term);
    console.log("Tipo de dato", typeof term);

    return term;
  }
}
