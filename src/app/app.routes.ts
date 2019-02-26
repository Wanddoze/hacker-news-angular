import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage', loadChildren: ()=> HomeModule },
  { path: 'newest', loadChildren: ()=> HomeModule },
  { path: 'comments', loadChildren: ()=> HomeModule },
  { path: 'showhn', loadChildren: ()=> HomeModule }
];

