import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { MenagerProfileComponent } from './components/profiles/menager-profile/menager-profile.component';
import { WaitressProfileComponent } from './components/profiles/waitress-profile/waitress-profile.component';
import { CookerProfileComponent} from './components/profiles/cooker-profile/cooker-profile.component';

import { AllIngredientsComponent } from './components/profiles/menager-profile/all-ingredients/all-ingredients.component';
import { AllProductsComponent } from './components/profiles/menager-profile/all-products/all-products.component';
import { AllSectionsComponent } from './components/profiles/menager-profile/all-sections/all-sections.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'menager', component: MenagerProfileComponent
       /* children: [
            {path: 'all-ingredients', component: AllIngredientsComponent},
            {path: 'all-products', component: AllProductsComponent},
            {path: 'all-sections', component: AllSectionsComponent}
        ]*/
    },
    { path: 'weitress', component: WaitressProfileComponent },
    { path: 'cooker', component: CookerProfileComponent }
];
