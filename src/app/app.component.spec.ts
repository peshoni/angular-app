import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AuthService } from './core/auth-service';

describe('AppComponent', () => {
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        AuthService, HttpClient, HttpHandler,
      ],

    }).compileComponents();
    // // Inject the http service and test controller for each test
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpTestingController);
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not logged in', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.componentInstance;
    expect(component.user.loggedIn === false).toBeTrue();
  });

  it(`should to be sidenav closed`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.componentInstance;
    let bar = fixture.debugElement.nativeElement.querySelector('.mat-sidenav');
    expect(bar).toBeNull();
  });

  it(`should not have a menu button in start state`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const menuButton = fixture.debugElement.nativeElement.querySelector('.app-bar-button');//.query(By.css('.app-bar-button')).nativeElement;
    expect(menuButton).toBeNull();
  });

  it(`should have a menu button when the user logged in`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.componentInstance;
    component.user.loggedIn = true;
    fixture.detectChanges();
    const menuButton = fixture.debugElement.nativeElement.querySelector('.app-bar-button');
    expect(menuButton).not.toBeNull();
  });
  it(`should have an app-bar when the user logged in`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.componentInstance;
    component.user.loggedIn = true;
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).not.toBeNull();
  });

});
