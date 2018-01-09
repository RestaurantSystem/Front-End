import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { UsersComponent } from './components/profiles/menager-profile/users/users.component';
import { AllProductsComponent } from './components/profiles/menager-profile/all-products/all-products.component';
import { AllIngredientsComponent } from './components/profiles/menager-profile/all-ingredients/all-ingredients.component';
import { AllSectionsComponent } from './components/profiles/menager-profile/all-sections/all-sections.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        WellcomePageComponent,
        FooterPageComponent,
        CreateOrderFormComponent,
        CookerProfileComponent,
        MenagerProfileComponent,
        WaitressProfileComponent,
        UsersComponent,
        AllProductsComponent,
        AllIngredientsComponent,
        AllSectionsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
