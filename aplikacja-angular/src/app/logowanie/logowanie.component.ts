import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

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

  login() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      console.log('Zalogowano pomyślnie');
      this.isError = false;
    } else {
      console.log('Błąd logowania.');
      this.isError = true;
    }
  }
}