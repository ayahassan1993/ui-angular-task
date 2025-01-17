import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () =>
          import(
            "../../modules/dashboard/pages/dashboard/dashboard.component"
          ).then((mod) => mod.DashboardComponent),
      },
    ],
  },
];
