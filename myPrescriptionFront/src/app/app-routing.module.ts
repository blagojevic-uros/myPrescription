import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootLayoutComponent } from './routing/root-layout/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: RootLayoutComponent,
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    component: RootLayoutComponent,
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
