import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
//import { JwtHelperService } from '@auth0/angular-jwt';

//import decode from 'jwt-decode';
//import * as JWT from 'jwt-decode';
//const jwtHelper = new JwtHelperService();

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private _router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //  let token = localStorage.getItem('user');

        // if (token) {
        //   if (!jwtHelper.isTokenExpired(token)) {

        //     request = request.clone({
        //       setHeaders: {
        //         Authorization: 'Bearer ' + token
        //       }
        //     });
        //   } else {

        //     localStorage.removeItem('user');
        //     this.router.navigate(['login']);
        //   }
        // }
        return next.handle(request);
    }
}