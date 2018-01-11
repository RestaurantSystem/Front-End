import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/input-models/user';
import { AuthService } from './../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    public user: User;
    constructor(
        private auth: AuthService,
        private router: Router
    ) {
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
                        this.router.navigateByUrl('/login')
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
