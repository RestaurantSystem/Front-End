import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';

const port = environment.serverPort;
const url = `http://localhost:${port}/Cook`

@Injectable()
export class CookService {
    constructor(private http: HttpClient) { }

    getAllOrders(): Observable<object> {
        return this.http.get(url + '/Orders');
    }

    getAllProducts(): Observable<object> {
        return this.http.get(url + '/Products');
    }

    getAllIngredients(): Observable<object> {
        return this.http.get(url + '/Ingredients');
    }
}
