import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/input-models/user';
import { AuthService } from './../../../core/services/auth.service'


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public user: User
    constructor(private auth: AuthService) {
        this.user = new User('', '')
    }

    ngOnInit() {

    }

    handleSubmit(event) {
        // TODO: add validation
        this.auth.login(this.user)
            .subscribe({
                next: res => {
                    let userName = res[res['length'] - 1]
                    delete res[res['length'] - 1]
                    sessionStorage.setItem('userName', userName)
                    sessionStorage.setItem('roles', JSON.stringify(res))
                },
                error: err => {
                    console.log(err)
                },
                complete: () => {
                    console.log('Login complete')
                }
            })
    }

    get diagnostics() {
        return JSON.stringify(this.user)
    }
}
