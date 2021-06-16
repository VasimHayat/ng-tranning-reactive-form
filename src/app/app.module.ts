import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './registration/form-error/form-error.component';
import { CustomEmailValidatorDirective } from './registration/common/custom-email-validator.directive';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    FormErrorComponent,
    CustomEmailValidatorDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
