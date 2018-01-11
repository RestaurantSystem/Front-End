import {NgModule} from '@angular/core';
import { NgModel } from '@angular/forms';

import { CurrentOrdersComponent} from './current-orders/current-orders.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProductsComponent } from './products/products.component';
import { CookerRoutingModule } from './cooker-routing.module';

@NgModule({
    declarations: [
        CurrentOrdersComponent,
        IngredientsComponent,
        ProductsComponent
    ],
    imports: [
        CookerRoutingModule
    ]
})
export class CookerModule { }
