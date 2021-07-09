import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/models/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService, private _snackBar: MatSnackBar, private router: Router) {
   
   }

  userId: string; //email of user

  loginUserData: any = {}; //password of user

  durationInSeconds: number = 1;

  auth: IAuth;


  ngOnInit(): void {
  }

  onSubmit(Form: NgForm) {
    console.log(Form.value);
    this.loginUser();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
    
  }

  loginUser() {
    if (this.loginUserData !== null && this.userId !== null) {
      this.authSrv.loginUser(this.loginUserData, this.userId)
        .subscribe(
          res => {
            console.log(res);
            this.auth = res;
            localStorage.setItem("Token", res.token);
            console.log(localStorage.getItem("Token"));
            if(this.auth.authenticated === true){
              this.openSnackBar('Login Successfull', 'Authentication Success')
              this.router.navigate(['/overview']);
            }

          },
          err => {
            this.openSnackBar('Invalid username or password', 'Authentication Failed')
          }
        ) 
    }
  }

}
