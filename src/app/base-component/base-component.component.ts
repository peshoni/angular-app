import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { browserRefresh } from '../app.component';
import { AppInjector } from '../core/app-injector';


@Component({
  selector: 'app-base-component',
  template: `
    <p>
      base-component works!
    </p>
  `,
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponent {
  protected appInjector = AppInjector.getInjector();
  protected _router: Router;
  constructor(router: Router) {
    this._router = router;// this.appInjector.get(Router);
    this.isThisRefresh();
  }
  /**
   * Checks for page refresh. 
   */
  isThisRefresh() {
    if (browserRefresh) { //OR some other logic
      this._router.navigate(['login']);
    }
  }
}
