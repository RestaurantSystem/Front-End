import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const url = `http://localhost:54857/Account/`

@Injectable()
export class AuthService {
    public currentAuthToken: string
    public currentUser: Object
    constructor(private http: HttpClient) { }

    register(payload: object) {
        let body = new URLSearchParams();
        body.set('Email', payload['email'])
        body.set('Password', payload['password'])
        body.set('Username', payload['username'])
        body.set('ConfirmPassword', payload['passwordConfirm'])

        return this.http.post(url + 'Register', body.toString(), {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
    }

    login(payload: object) {
        let body = new URLSearchParams();
        body.set('Password', payload['password'])
        body.set('Username', payload['username'])

        return this.http.post(url + 'Login', body.toString(), {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
    }
}