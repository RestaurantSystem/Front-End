import { Component, Input } from '@angular/core';
import { MenagerService } from './../../../../../core/services/menager.service'

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
    @Input() product: object[]

    constructor(private menagerService: MenagerService) { }

    handleEditSubmit() {
        this.menagerService.updateProduct(this.product)
            .subscribe({
                next: data => {
                    console.log()
                },
                error: err => {
                    console.log('This shit is error:')
                    console.log(err)
                },
                complete: () => {
                    console.log('This shit is complete')
                }
            })
    }
}
