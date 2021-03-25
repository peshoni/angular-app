import { Component, isDevMode, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppInjector } from 'src/app/core/app-injector';
import { Valido } from 'src/app/core/valido';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //protected apiService: ApiService;
  // user: User;
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  invalidMessage: string;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _app: AppComponent, private _valido: Valido) {

  }
  ngOnInit() {
    // this.app.clearUserData();
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (isDevMode()) {
      // environment.
      //1- super
      let whoIs: number = 1

        ;
      switch (whoIs) {
        case 1:
          this.loginForm.get('username').patchValue(environment.user);
          this.loginForm.get('password').patchValue(environment.pass);
          break;
        default:
          break;
      }
    }


  }


  onSubmit() {

    const injector = AppInjector.getInjector();
    //this.apiService = injector.get(ApiService);

    if (this._valido.isThereForbiddenWords(this.loginForm.get('username').value) ||
      this._valido.isThereForbiddenWords(this.loginForm.get('password').value)) {
      this.invalidLogin = true;
      this.invalidMessage = 'Използвате забранени думи.';
      return;
    }
    if (this.loginForm.invalid) {
      return;
    }

    this._app.user.loggedIn = true;

    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }



    this._router.navigate(['home']);

    // this.apiService.login(loginPayload).subscribe(data => {

    //   if (data.status === 200) {
    //     /**
    //      * Switch for login result
    //      */
    //     switch (data.message) {
    //       case 'wrong_user':
    //         this.invalidLogin = true;
    //         this.invalidMessage = 'грешно потребителско име';
    //         return;
    //       case 'wrong_pass':
    //         this.invalidLogin = true;
    //         this.invalidMessage = 'грешна парола';
    //         return;
    //       case 'logged':
    //         this.invalidLogin = true;
    //         this.invalidMessage = 'някой е влязъл с този акаунт';
    //         return;

    //       case 'success':
    //         let user: User = new User();
    //         user.username = loginPayload.username;
    //         user.roleId = data.result.roleId;
    //         user.id = data.result.id;
    //         user.officeId = data.result.officeId;
    //         localStorage.setItem('user', data.result.token);

    //         user.firstName = data.result.firstName;
    //         user.lastName = data.result.lastName;

    //         this.app.isHeaderVisible = true;
    //         this.app.user = user;
    //         this.app.prepareTheCollections();

    //         this.router.navigate(['home']);

    //         break;
    //       case 'deleted':
    //         this.invalidLogin = true;
    //         this.invalidMessage = 'вашия акаунт е изтрит';
    //         break;
    //     }


    //   } else {
    //     this.invalidLogin = true;
    //     alert(data.message);
    //   }
    // });
  }
  ngOnDestroy() {
    // console.log('login destructor');
  }

}
