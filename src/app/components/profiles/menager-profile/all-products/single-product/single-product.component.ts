import { Component, Input } from '@angular/core';

@Component({
    selector: '[single-product]',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
    @Input() product: object
}
