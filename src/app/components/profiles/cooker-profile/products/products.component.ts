import { Component, OnInit } from '@angular/core';
import { CookService } from './../../../../core/services/cook.service'

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    public products: object[]

    constructor(private cookService: CookService) {
        this.products = []
    }

    ngOnInit() {
        this.cookService.getAllProducts()
            .subscribe({
                next: data => {
                    this.products = data['products']
                },
                complete: () => {
                    console.log('Products loaded!')
                    console.log(this.products)
                }
            })
    }

}
