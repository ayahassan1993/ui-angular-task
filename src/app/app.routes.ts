import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("./modules/auth/pages/login/login.component").then(
        (mod) => mod.LoginComponent
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./core/layout/layout-routes").then((mod) => mod.routes),
  },
];
