import { Component, OnInit } from '@angular/core'
import { MenagerService } from './../../../../core/services/menager.service'

@Component({
    selector: 'app-all-ingredients',
    templateUrl: './all-ingredients.component.html',
    styleUrls: ['./all-ingredients.component.css']
})
export class AllIngredientsComponent implements OnInit {
    public ingredients: object[]

    constructor(private menagerService: MenagerService) {
        this.ingredients = []
    }

    ngOnInit() {
        this.menagerService.getAllIngredients()
            .subscribe({
                next: data => {
                    this.ingredients = data['ingredients']
                }
            })
    }
}
