import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  login: string = 'Admin@mail.ru'
  password: string = '12345'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tryLoginPassword(){
        if(this.login == 'Admin@mail.ru' && this.password == '12345') {
          this.router.navigate(['/news']),localStorage.setItem('auth-token', 'true')
        }
    }

}
