import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const url = `http://localhost:54857/Manager`

@Injectable()
export class MenagerService {
    constructor(private http: HttpClient) {}

    getAllUsers() {
        return this.http.get(url + '/Users')
    }

    getAllSections() {
        return this.http.get(url + '/Sections/All')
    }
}
