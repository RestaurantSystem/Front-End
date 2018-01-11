import { Component, OnInit } from '@angular/core';
import { MenagerService } from './../../../../core/services/menager.service'


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: object[]
    public roles: object[]
    constructor(private menagerService: MenagerService) {
        this.users = []
        this.roles = []
    }

    ngOnInit() {
        this.menagerService.getAllUsers()
            .subscribe({
                next: data => {
                    this.users = data['users']
                    this.roles = data['roles']
                }
            })
    }
}
