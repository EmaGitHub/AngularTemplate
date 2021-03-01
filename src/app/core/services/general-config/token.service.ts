import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TokenService {

    private _tokenAcquiredSubject$: Subject<any> = new BehaviorSubject<any>({ });

    constructor() { }

    get tokenAcquiredAsObservable(): Observable<any> {
        return this._tokenAcquiredSubject$.asObservable();
    }

    public nextTokenAcquired() {
        this._tokenAcquiredSubject$.next();
    }

    public saveTokenInLocalStorage(token: string) {
        localStorage.setItem('token', token);
        return true;
    }

    public getToken(){
        let token: string =  localStorage.getItem('Token');
        console.log("Token: ", token);
        return token;
    }
}
