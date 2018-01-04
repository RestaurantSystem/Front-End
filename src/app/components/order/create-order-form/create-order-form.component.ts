import { Component, OnInit } from '@angular/core'
import { Order } from './../../../models/input-models/order'

@Component({
    selector: 'app-create-order-form',
    templateUrl: './create-order-form.component.html'
})
export class CreateOrderFormComponent implements OnInit {
    public order: Order
    constructor() {
        this.order = new Order('', '', '', '')
    }

    ngOnInit() {
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.order)
    }

    get diagnostics() {
        return JSON.stringify(this.order)
    }
}
