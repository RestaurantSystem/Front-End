import { Component, OnInit } from '@angular/core'
import { MenagerService } from './../../../../core/services/menager.service'

@Component({
    selector: 'app-all-sections',
    templateUrl: './all-sections.component.html',
    styleUrls: ['./all-sections.component.css']
})
export class AllSectionsComponent implements OnInit {
    public sections: object[]
    constructor(private menagerService: MenagerService) {
        this.sections = []
    }

    ngOnInit() {
        this.menagerService.getAllSections()
            .subscribe({
                next: data => {
                    this.sections = data['Sections']
                }
            })
    }
}
