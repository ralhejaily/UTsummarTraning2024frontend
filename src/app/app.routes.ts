import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {StuBodyComponent} from "./home/stu-body/stu-body.component";
import {EmpBodyComponent} from "./home/emp-body/emp-body.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    // data: { requiredAuth: false },
    // canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // data: { requiredAuth: false },
    // canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'stu',
    component: StuBodyComponent,
  },
  {
    path: 'emp',
    component: EmpBodyComponent,
  },
];
