import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from './auth-service';


@Injectable()
export class AuthGuardService implements CanActivate {
    private user: User;
    constructor(private _router: Router, private _auth: AuthService) {
        this._auth.observedUser.subscribe(
            data => {

                console.log('IN AUTH GUARD....');
                this.user = data;
            }
        )
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        console.log(this._auth.isUserLoggedIn());
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