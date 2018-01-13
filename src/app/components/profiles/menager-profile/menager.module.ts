import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { UsersComponent } from './users/users.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { AllIngredientsComponent } from './all-ingredients/all-ingredients.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { MenagerRoutingModule } from './menager-routing.module';
import { MenagerService } from '../../../core/services/menager.service';
import { SingleProductComponent } from './all-products/single-product/single-product.component';
import { EditProductComponent } from './all-products/edit-product/edit-product.component';

@NgModule({
    declarations: [
        UsersComponent,
        AllProductsComponent,
        AllSectionsComponent,
        AllIngredientsComponent,
        SingleProductComponent,
        EditProductComponent,
    ],
    imports: [
        MenagerRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        MenagerService
    ]
})
export class MenagerModule { }
