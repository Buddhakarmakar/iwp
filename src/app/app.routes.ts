import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

export const routes: Routes = [
  { path: "", component: MainMenuComponent, pathMatch: "full" },
  { path: "main-menu", component: MainMenuComponent },
];
