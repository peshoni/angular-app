import { registerLocaleData } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import localeBg from '@angular/common/locales/bg'; // to register bg
import { User } from './models/user';

registerLocaleData(localeBg);

export class MenuOptions {
  key: number
  label: string;
  route: string;
  matIcon: string;
  submenus: MenuOptions[] = [];
  expanded: boolean = false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';

  events: string[] = []; // for sidenav
  opened: boolean = true;
  menuOptions: MenuOptions[] = [];

  user: User = new User();

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('bg');

    let menu: MenuOptions = { key: 1, label: 'потребители', route: '/list-user', matIcon: 'supervised_user_circle', submenus: [], expanded: false };

    let subMenu: MenuOptions = { key: 2, label: 'под потребители', route: '/list-user', matIcon: '', submenus: [], expanded: false };
    menu.submenus.push(subMenu);

    this.menuOptions.push(menu);

    let menu2: MenuOptions = { key: 1, label: 'фактури', route: '/list-user', matIcon: 'supervised_user_circle', submenus: [], expanded: false };
    this.menuOptions.push(menu2);
  }
  toggleMenu(menu: MenuOptions) {
    menu.expanded = !menu.expanded;
  }
}


