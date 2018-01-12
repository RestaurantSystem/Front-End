import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

const port = environment.serverPort;
const url = `http://localhost:${port}/waiter`;

@Injectable()
export class WaitressService {
    constructor(private http: HttpClient) {}

    getAllTables() {
        return this.http.get(url + '/all-tables');
    }

    getTables() {
        return this.http.get(url + '/tables');
    }

    getBills() {
        return this.http.get(url + '/bills');
    }
}
