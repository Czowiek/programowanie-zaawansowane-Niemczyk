import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogowanieComponent]
    });

    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(usernameField.getAttribute('required')).toBe('');
    expect(passwordField.getAttribute('required')).toBe('');
  });

  it('should call login() method when form is submitted', () => {
    spyOn(component, 'login');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  it('should display an error message for invalid login', () => {
    component.formData = {
      username: 'asd',
      password: 'asd',
    }

    component.login();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
  });

  it('should log in for valid username and password', () => {
    component.formData = {
      username: 'admin',
      password: 'admin',
    }

    component.login();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeFalsy();
  });
});     