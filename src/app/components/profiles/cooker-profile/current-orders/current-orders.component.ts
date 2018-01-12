import { Component, OnInit } from '@angular/core';
import { CookService } from "./../../../../core/services/cook.service";

@Component({
    selector: 'app-current-orders',
    templateUrl: './current-orders.component.html',
    styleUrls: ['./current-orders.component.css']
})

export class CurrentOrdersComponent implements OnInit {
    private orders: object[]
    constructor(private cookService: CookService) {
        this.orders = []
    }

    ngOnInit() {
        this.cookService.getAllOrders()
            .subscribe({
                next: data => {
                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            this.orders.push(data[key])
                        }
                    }
                },
                complete: () => {
                    console.log(this.orders)
                }
            });
    }

}
