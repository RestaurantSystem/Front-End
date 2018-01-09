import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './/components/auth/auth.module'

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { WellcomePageComponent } from './components/wellcome-page/wellcome-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { CreateOrderFormComponent } from './components/order/create-order-form/create-order-form.component';
import { CookerProfileComponent } from './components/profiles/cooker-profile/cooker-profile.component';
import { MenagerProfileComponent } from './components/profiles/menager-profile/menager-profile.component';
import { WaitressProfileComponent } from './components/profiles/waitress-profile/waitress-profile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        WellcomePageComponent,
        FooterPageComponent,
        CreateOrderFormComponent,
        CookerProfileComponent,
        MenagerProfileComponent,
        WaitressProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        AuthModule,
        HttpClientModule 
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
