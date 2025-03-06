import { Routes } from '@angular/router';
import { routing } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent}
];
