import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg'; // to register bg
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth-service';
import { User } from './models/user';
import { MenuOptions } from './util/menu-options';
import { MenuUtil } from './util/menu-util';


export let browserRefresh = false;

registerLocaleData(localeBg);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  events: string[] = []; // for sidenav
  opened: boolean = true;
  menuOptions: MenuOptions[] = [];
  subscription: Subscription;
  user: User;
  //u: Observable<User>;


  constructor(private _auth: AuthService, public _router: Router, private _translate: TranslateService) {
    _translate.setDefaultLang('bg');
    let id: number = 1
    let menuUtil: MenuUtil = new MenuUtil();
    let mAdmin: MenuOptions = { key: id++, label: 'администрация', route: '/list-user', matIcon: 'location_city', submenus: [], expanded: false };
    menuUtil.addMenu(mAdmin);

    menuUtil.addSubmenu(mAdmin.key, { key: id++, label: 'потребители', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mAdmin.key, { key: id++, label: 'номенклатури', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mAdmin.key, { key: id++, label: 'настройки', route: '/list-user', matIcon: '', submenus: [], expanded: false });

    let mStorage: MenuOptions = { key: id++, label: 'склад', route: '/list-user', matIcon: 'storage', submenus: [], expanded: false };
    menuUtil.addMenu(mStorage);
    menuUtil.addSubmenu(mStorage.key, { key: id++, label: 'наличност', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mStorage.key, { key: id++, label: 'доставка', route: '/list-user', matIcon: '', submenus: [], expanded: false });

    let mSales: MenuOptions = { key: id++, label: 'продажби', route: '/list-user', matIcon: 'monetization_on', submenus: [], expanded: false };
    menuUtil.addMenu(mSales);
    menuUtil.addSubmenu(mSales.key, { key: id++, label: 'заявка за продажба', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mSales.key, { key: id++, label: 'извършени продажби', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mSales.key, { key: id++, label: 'анулиране на продажба', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mSales.key, { key: id++, label: 'фактури', route: '/print-layout', matIcon: '', submenus: [], expanded: false });

    let mOffers: MenuOptions = { key: id++, label: 'оферти', route: '/list-user', matIcon: 'local_offer', submenus: [], expanded: false };
    menuUtil.addMenu(mOffers);
    menuUtil.addSubmenu(mOffers.key, { key: id++, label: 'създаване на оферта', route: '/list-user', matIcon: '', submenus: [], expanded: false });

    let mHistory: MenuOptions = { key: id++, label: 'история', route: '/list-user', matIcon: 'history', submenus: [], expanded: false };
    menuUtil.addMenu(mHistory);
    menuUtil.addSubmenu(mHistory.key, { key: id++, label: 'продажби', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mHistory.key, { key: id++, label: 'заявки', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mHistory.key, { key: id++, label: 'заприхождаване в склад', route: '/list-user', matIcon: '', submenus: [], expanded: false });
    menuUtil.addSubmenu(mHistory.key, { key: id++, label: 'изписване от склад', route: '/list-user', matIcon: '', submenus: [], expanded: false });


    this.menuOptions = menuUtil.buildMenu();
    console.log(this.menuOptions);


    this._auth.observedUser.subscribe(
      data => {
        this.user = data;
      }
    )


    this.subscription = _router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        /**
         * This property(router.navigated) is false when the router starts and
         *  after the first navigation it changes to true. And that’s it.         
         */
        browserRefresh = !_router.navigated;
      }
    });
  }



  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  toggleMenu(menu: MenuOptions) {
    menu.expanded = !menu.expanded;
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    ;
    switch (this._router.url) {
      case '/home':
        // this.logout();
        // this.snackBar.open("Bye-bye!", "", {
        //   duration: 3000,
        // });
        console.log("Bye-bye!");
        delete this.user;
        this._router.navigate(['']);
        break;
      default:

        break;
    }
  }
}


