import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LogowanieComponent } from './logowanie/logowanie.component';

export const routes: Routes = [
    {
        path: '',
        component: LogowanieComponent,
        data: { title: 'Logowanie' }
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Kokpit' }
    }
];