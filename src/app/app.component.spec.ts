import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a toolbar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let bar = fixture.debugElement.nativeElement.querySelector('mat-toolbar');
    expect(bar).toBeTruthy();
    // const app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('app');
  });

  it(`should have a menu button`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const menuButton = fixture.debugElement.query(By.css('.app-bar-button')).nativeElement;
    // let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(menuButton.id).toEqual('app-menu');
  });

  /**
   * Test open close
   */
  // it('should', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   spyOn(fixture, 'onEditButtonClick');

  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //   tick();
  //   //expect(component.onEditButtonClick).toHaveBeenCalled();
  //   expect(button.id).toEqual('app-menu');
  // }));



  it('should render a sidenav', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-sidenav').textContent).toContain('потребители');
  });




  // it('should delete the entity', fakeAsync(() => {
  //   component.id = 1; // preparations..
  //   component.getEntity(); // this one loads up the entity to my component
  //   tick(); // make sure that everything that is async is resolved/completed
  //   expect(myService.getMyThing).toHaveBeenCalledWith(1);
  //   // more expects here..
  //   fixture.detectChanges();
  //   tick();
  //   fixture.detectChanges();
  //   const deleteButton = fixture.debugElement.query(By.css('.btn-danger')).nativeElement;
  //   deleteButton.click(); // I've clicked the button, and now the delete function is called...

  //   tick(2501); // timeout for redirect is 2500 ms :)  <-- solution

  //   expect(myService.delete).toHaveBeenCalledWith(1);
  //   // more expects here..
  // }));


});
