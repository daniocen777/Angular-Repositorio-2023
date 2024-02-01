import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder, private readonly _apiService: ApiService<any>) { }

  ngOnInit(): void {
    this.formLogin = this._formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  login(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls) {
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }

    const { username, password } = this.formLogin.value;
    const body = {
      username,
      password,
      request_token: sessionStorage.getItem('requestToken')
    }
    const configPost = { url: `${environment.baseUrl}${environment.validateWithLogin} `, params: { api_key: environment.apiKey }, body };

    this._apiService.postService(configPost).subscribe(response => {
      // Nuevo token
      const { request_token } = response;
      sessionStorage.setItem('requestToken', request_token);
    });

    console.log(this.formLogin.value);
  }

}
