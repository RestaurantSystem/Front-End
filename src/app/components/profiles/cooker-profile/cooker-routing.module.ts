import {NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
 // import { AuthGuard } from '';
import {CookerProfileComponent} from './cooker-profile.component';


import { CurrentOrdersComponent} from './current-orders/current-orders.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProductsComponent } from './products/products.component';

const cookerRoutes: Routes = [
    { path: 'cooker', component: CookerProfileComponent,
     children: [
         {path: 'current-orders', component: CurrentOrdersComponent},
         {path: 'ingredients', component: IngredientsComponent},
         {path: 'products', component: ProductsComponent}
     ]
 },
];


@NgModule ({
    imports: [
        RouterModule.forChild(cookerRoutes)
    ],
    exports: [RouterModule],
    providers: [
       // AuthGuard
    ]
})
export class CookerRoutingModule { }
