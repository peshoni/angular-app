import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../models/user';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _router: Router, private _app: AppComponent) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        console.log('HEREEEEE');
        let user: User = this._app.user;
        console.log(user);
        //check some condition  
        let someCondition: boolean = false;
        if (someCondition) {
            alert('You are not allowed to view this page');
            //redirect to login/home page etc
            //return false to cancel the navigation
            return false;
        }
        return true;
    }

}