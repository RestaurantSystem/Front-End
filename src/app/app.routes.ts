import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { MenagerProfileComponent } from './components/profiles/menager-profile/menager-profile.component';
import { WaitressProfileComponent } from './components/profiles/waitress-profile/waitress-profile.component';
import { CookerProfileComponent } from './components/profiles/cooker-profile/cooker-profile.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'menager',
        //loadChildren: './app/components/menager/menager.module#MenagerModule'
        loadChildren: './menager/menager.module#MenagerModule'
    },
    {
        path: 'waitress',
        loadChildren: './components/profile/waitress/wairess.module#WaitressModule'
    },
    {
        path: 'cooker',
        loadChildren: './components/profile/cooker/cooker.module#CookerModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutes { }
