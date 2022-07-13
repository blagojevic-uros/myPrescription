import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegistrationPageComponent } from './page/registration-page/registration-page.component';


@NgModule({
    declarations: [
    RegisterFormComponent,
    RegistrationPageComponent
  ],
    imports: [
        CommonModule
    ]
})
export class RegistrationModule { }
