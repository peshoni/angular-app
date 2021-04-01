import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { User } from "../models/user";

@Injectable()

export class AuthService {
    private isloggedIn: boolean;
    private user: User;
    private notifySubscribers: BehaviorSubject<any>;
    public observedUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.isloggedIn = false;
        this.notifySubscribers = new BehaviorSubject<User>(
            new User()
        );
        this.observedUser = this.notifySubscribers.asObservable();
    }

    login(loginPayload: any) {
        loginPayload['username'];
        loginPayload['password'];
        //TODO api call here
        this.isloggedIn = true;
        this.user = new User();
        this.user.loggedIn = true;
        //notify subscribers
        this.setNewLoggedUser(this.user);
        return of(this.isloggedIn);
    }
    /**
     * Sets user as logged in and notifyes subscribers.
     * @param user 
     */
    setNewLoggedUser(user: User) {
        this.notifySubscribers.next(user);
    }

    getUser(): Observable<User> {
        return of(this.user);
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

    logoutUser(): void {
        //API CALL
        this.isloggedIn = false;
    }
}