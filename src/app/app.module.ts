import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { WellcomePageComponent} from './components/wellcome-page/wellcome-page.component';
import { MenagerComponent } from './components/menager/menager.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        WellcomePageComponent,
        MenagerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
