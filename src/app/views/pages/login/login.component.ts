import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../projectservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  msg : string ="";
  error_show = false;
  constructor(private _login: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      mobile: new FormControl(),
      password: new FormControl(),
      child_id: new FormControl(''),
      device_id: new FormControl(''),
      device_token: new FormControl(''),
      device_name: new FormControl(''),
    })
  }
  onSubmit(fc: any) {
    this._login.postLogin(fc.value).subscribe({
      next: (data) => {
          if (data.status == 1){
            this.router.navigate(['dashboard']);
            this.error_show= false;
          }else{
            this.msg= data.message;
            this.error_show= true;
          }
      }
    })
  }

}
