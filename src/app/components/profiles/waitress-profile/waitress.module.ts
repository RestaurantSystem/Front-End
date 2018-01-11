import {NgModule} from '@angular/core';
import { NgModel } from '@angular/forms';

import {AllTablesComponent} from './all-tables/all-tables.component';
import {TablesComponent } from './tables/tables.component';

import {WaitressRoutingModule} from './waitress-routing.module';
import { MyBillsComponent } from './my-bills/my-bills.component';

@NgModule({
    declarations: [
       AllTablesComponent,
       TablesComponent,
       MyBillsComponent
    ],
    imports: [
        WaitressRoutingModule
    ]
})
export class WaitressModule { }
