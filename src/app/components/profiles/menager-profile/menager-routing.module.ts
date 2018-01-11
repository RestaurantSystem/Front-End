import {NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
 // import { AuthGuard } from '';
import {MenagerProfileComponent} from './menager-profile.component';

import { UsersComponent } from './users/users.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { AllIngredientsComponent } from './all-ingredients/all-ingredients.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';

const menagerRoutes: Routes = [
    { path: 'menager', component: MenagerProfileComponent,
     children: [
         {path: 'user', component: UsersComponent},
         {path: 'all-ingredients', component: AllIngredientsComponent},
         {path: 'all-products', component: AllProductsComponent},
         {path: 'all-sections', component: AllSectionsComponent}
     ]
 },
];


@NgModule ({
    imports: [
        RouterModule.forChild(menagerRoutes)
    ],
    exports: [RouterModule],
    providers: [
       // AuthGuard
    ]
})
export class MenagerRoutingModule { }
