import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

const port = environment.serverPort;
const url = `http://localhost:${port}/Waitress`;

@Injectable()
export class WaitressService {
    constructor(private http: HttpClient) {}

    getAllTables() {
        return this.http.get(url + '/All-tables');
    }

    getTables() {
        return this.http.get(url + '/Tables');
    }

    getBills() {
        return this.http.get(url + '/Bills');
    }
}
