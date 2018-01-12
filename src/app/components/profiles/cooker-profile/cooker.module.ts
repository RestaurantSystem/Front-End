import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CookerRoutingModule } from './cooker-routing.module';
import { CommonModule } from '@angular/common'

import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProductsComponent } from './products/products.component';

import { CookService } from './../../../core/services/cook.service'

@NgModule({
    declarations: [
        CurrentOrdersComponent,
        IngredientsComponent,
        ProductsComponent
    ],
    imports: [
        CookerRoutingModule,
        CommonModule
    ],
    providers: [
        CookService
    ]
})
export class CookerModule { }
