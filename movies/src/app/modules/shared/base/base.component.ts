import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ApiNameSpace } from 'src/app/utils/api.model';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent<T extends any> implements OnInit {
  loading: boolean = true;
  paramsConfig: ApiNameSpace.Params = {
    url: '',
    params: {},
    body: {}
  };

  constructor(protected readonly apiService: ApiService<T>) { }

  ngOnInit(): void {
  }

  getRequest(): void {
    this.apiService.getService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response);
      },
      error: () => { },
      complete: () => { }
    });
  }

  postRequest(): void {
    this.apiService.postService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response);

      },
      error: () => { },
      complete: () => { }
    });
  }
}
