import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgModel } from '@angular/forms';

import { UsersComponent } from './users/users.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { AllIngredientsComponent } from './all-ingredients/all-ingredients.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { MenagerRoutingModule } from './menager-routing.module';
import { MenagerService } from '../../../core/services/menager.service';

@NgModule({
    declarations: [
        UsersComponent,
        AllProductsComponent,
        AllSectionsComponent,
        AllIngredientsComponent
    ],
    imports: [
        MenagerRoutingModule,
        CommonModule
    ],
    providers: [
        MenagerService
    ]
})
export class MenagerModule { }
