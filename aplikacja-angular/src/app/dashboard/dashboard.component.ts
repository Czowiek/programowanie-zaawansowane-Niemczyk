import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();

    if(!this.isLoggedIn)
    {
      this.router.navigate(['']);
    }
  }
}