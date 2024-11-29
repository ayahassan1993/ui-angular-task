import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("./modules/auth/pages/login/login.component").then(
        (mod) => mod.LoginComponent
      ),
  },
];