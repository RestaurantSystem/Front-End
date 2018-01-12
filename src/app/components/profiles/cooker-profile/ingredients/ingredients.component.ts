import { Component, OnInit } from '@angular/core';
import { CookService } from './../../../../core/services/cook.service'

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
    public ingredients: object[]

    constructor(private cookService: CookService) {
        this.ingredients = []
    }

    ngOnInit() {
        this.cookService.getAllIngredients()
            .subscribe({
                next: data => {
                    this.ingredients = data['ingredients']
                },
                complete: () => {
                    console.log('Ingredients loaded!')
                    console.log(this.ingredients)
                }
            })
    }
}
