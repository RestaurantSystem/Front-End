import { Component, OnInit } from '@angular/core';
import { MenagerService } from './../../../../core/services/menager.service';

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
    public products: object[];

    constructor(private menagerService: MenagerService) {
        this.products = [];
    }

    ngOnInit() {
        this.menagerService.getAllProducts()
            .subscribe({
                next: data => {
                    this.products = data['products'];
                    console.log(this.products);
                }
            });
    }
}
