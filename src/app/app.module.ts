// Miscellaneous
import { routes } from './app.routes';
import { HttpHandler } from '@angular/common/http/src/backend';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MenagerModule } from './components/profiles/menager-profile/menager.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenagerRoutingModule } from './components/profiles/menager-profile/menager-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CreateOrderFormComponent } from './components/order/create-order-form/create-order-form.component';
import { CookerProfileComponent } from './components/profiles/cooker-profile/cooker-profile.component';
import { MenagerProfileComponent } from './components/profiles/menager-profile/menager-profile.component';
import { WaitressProfileComponent } from './components/profiles/waitress-profile/waitress-profile.component';
import { WellcomePageComponent } from './components/wellcome-page/wellcome-page.component';
// import { RegisterComponent } from './components/auth/register/register.component';
// import { WellcomePageComponent } from './components/wellcome-page/wellcome-page.component';
// import { FooterPageComponent } from './components/footer-page/footer-page.component';
// import { UsersComponent } from './components/profiles/menager-profile/users/users.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        // RegisterComponent,
        WellcomePageComponent,
        // MenagerComponent,
        //  WellcomePageComponent,
        // UsersComponent,
        CreateOrderFormComponent,
        CookerProfileComponent,
        MenagerProfileComponent,
        WaitressProfileComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        AuthModule,
        HttpClientModule,
        MenagerRoutingModule,
        MenagerModule
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
