import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { BaseComponent } from '../base-component/base-component.component';
import { AuthService } from '../core/auth-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private app: AppComponent, private _auth: AuthService, r: Router) {
    super(r);
  }

  ngOnInit() {

  }

}
