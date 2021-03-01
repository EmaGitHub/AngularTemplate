import { of } from 'rxjs';
import { HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

    constructor() { }

    public testToken() {

        return of(new HttpResponse({ status: 200, headers: new HttpHeaders({ 'Token': "[1,2]" }) }));
    }

}
