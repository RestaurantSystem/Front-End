import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/input-models/user';
import { AuthService } from './../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    public user: User;
    constructor(private auth: AuthService) {
        this.user = new User('', '', '', '');
    }

    ngOnInit() {

    }

    handleSubmit(event) {
        // TODO: add validation
        this.auth.register(this.user)
            .subscribe({
                next: res => {
                    if (res['id']) {
                        // reg successful
                        sessionStorage.setItem('userName', res['userName']);
                    } else {
                        console.log('No');
                    }
                },
                error: err => {
                    console.log(err);
                },
                complete: () => {
                    console.log('This is complete!!');
                }
            })
    }

    get diagnostics() {
        return JSON.stringify(this.user);
    };
}
