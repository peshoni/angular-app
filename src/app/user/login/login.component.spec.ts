import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/core/auth-service';
import { Valido } from 'src/app/core/valido';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({

      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AppComponent, AuthService, FormBuilder, HttpClient, HttpHandler, Valido, Injector,
        {
          provide: FormGroup,
          useValue: undefined
        },
      ]


      // declarations: [LoginComponent],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // providers: [
      //   AuthService,
      //   TranslateLoader, FormBuilder, AppComponent
      // ]
      // providers: [
      //   FormBuilder,
      //   {
      //     provide: HTTP_INTERCEPTORS,
      //     useClass: TokenInterceptor,
      //     multi: true
      //   }
      // ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });
});
