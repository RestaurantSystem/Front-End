import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { CreateOrderFormComponent } from './components/order/create-order-form/create-order-form.component';

import { CookerProfileComponent } from './components/profiles/cooker-profile/cooker-profile.component';
import { CookerModule} from './components/profiles/cooker-profile/cooker.module';
import { CookerRoutingModule} from './components/profiles/cooker-profile/cooker-routing.module';

import { MenagerProfileComponent } from './components/profiles/menager-profile/menager-profile.component';
import { MenagerModule } from './components/profiles/menager-profile/menager.module';
import { MenagerRoutingModule } from './components/profiles/menager-profile/menager-routing.module';

import { WaitressProfileComponent } from './components/profiles/waitress-profile/waitress-profile.component';
import { WaitressModule } from './components/profiles/waitress-profile/waitress.module';
import { WaitressRoutingModule} from './components/profiles/waitress-profile/waitress-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
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
        HttpClientModule,
        MenagerRoutingModule,
        MenagerModule,
        WaitressRoutingModule,
        WaitressModule,
        CookerModule,
        CookerRoutingModule
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
