import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { User } from '../../../models/input-models/user';
import { AuthService } from './../../../core/services/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public user: User
    constructor(
        private auth: AuthService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef
    ) {
        this.user = new User('', '')
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {

    }

    handleSubmit(event) {
        // TODO: add validation
        this.auth.login(this.user)
            .subscribe({
                next: res => {
                    if (res['value'] === undefined) {
                        let userName = res[res['length'] - 1]
                        delete res[res['length'] - 1]
                        sessionStorage.setItem('userName', userName)
                        sessionStorage.setItem('roles', JSON.stringify(res))
                        this.toastr.success('Login successful!')
                        console.log('true')
                    } else {
                        console.log(false)
                    }
                },
                error: err => {
                    this.toastr.error('Invalid credentials!')
                },
                complete: () => {
                    this.toastr.error('Login complete!')
                }
            })
    }

    get diagnostics() {
        return JSON.stringify(this.user)
    }
}
