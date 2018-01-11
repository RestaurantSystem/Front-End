import {NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
 // import { AuthGuard } from '';
import {WaitressProfileComponent} from './waitress-profile.component';

import {AllTablesComponent} from './all-tables/all-tables.component';
import { MyBillsComponent } from './my-bills/my-bills.component';
import {TablesComponent } from './tables/tables.component';

const waitressRoutes: Routes = [
    { path: 'waitress', component: WaitressProfileComponent,
     children: [
         {path: 'tables', component: TablesComponent},
         {path: 'all-tables', component: AllTablesComponent},
         {path: 'bills', component: MyBillsComponent},
     ]
 },
];


@NgModule ({
    imports: [
        RouterModule.forChild(waitressRoutes)
    ],
    exports: [RouterModule],
    providers: [
       // AuthGuard
    ]
})
export class WaitressRoutingModule { }
