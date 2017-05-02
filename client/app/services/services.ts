import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "RxJS/Rx";

@Injectable()
export class EmployeeServcies {
    constructor(private http: Http) {
       
    }
    getEmployeeList() {
        return this.http.get('http://localhost:4500/api');
    }
    
}