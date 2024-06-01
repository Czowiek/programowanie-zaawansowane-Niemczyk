import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  isError = false;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      console.log('Zalogowano pomyślnie');
      this.isError = false;
      this.auth.login();
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Błąd logowania.');
      this.isError = true;
    }
  }
}