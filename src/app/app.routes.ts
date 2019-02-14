import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: ()=> HomeModule },
];

