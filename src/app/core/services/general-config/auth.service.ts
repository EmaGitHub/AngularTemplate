import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { STORAGE_KEY_TOKEN, STORAGE_KEY_USERNAME } from 'src/app/shared/utils/constants';
import { JwtToken } from 'src/app/shared/domain/auth/jwt-token';
import { EnvironmentService } from './environment.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public environmentService: EnvironmentService) { }

    private jwtHelper: JwtHelperService = new JwtHelperService();

    public isAuthenticated(): boolean {
        console.log('getting token to check if is authenticated', localStorage.getItem(STORAGE_KEY_TOKEN));
        const token = localStorage.getItem(STORAGE_KEY_TOKEN);
        return token && !this.jwtHelper.isTokenExpired(token);
    }

    public getToken(): string {
        if (!this.environmentService.environment.production) {
            return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJleGFtMDAyIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sImNoYW5uZWwiOiJiMmIiLCJleHAiOjE3NDc4Mzc3NTEsImh6aWQiOiJIWjkxNjdBMjA0MTIyOTQ1MDg5MzE0N0FEOEMwMTU3QzU0IiwiZ3JvdXAiOiJWRFJfVVNFUiIsImF1dGhvcml0aWVzIjpbIlZEUl9VU0VSIl0sImp0aSI6IjM2MWJkNTJmLTE5MzEtNDA1ZC1iZmYxLWFkOGFmNmZhZDgzOCIsImNsaWVudF9pZCI6ImZvb0NsaWVudElkUGFzc3dvcmQifQ.0fhJVJxiQ6QskRXecwirVYDwY2ziYMl_Qt8l6ysw0Ts';
        }

        console.log('getting token', localStorage.getItem(STORAGE_KEY_TOKEN));
        return localStorage.getItem(STORAGE_KEY_TOKEN);
    }

    public getUsername(): string {
        console.log('getting username', localStorage.getItem(STORAGE_KEY_USERNAME));
        return localStorage.getItem(STORAGE_KEY_USERNAME);
    }

    public setTokenAndUserInfo(jwtToken: JwtToken) {
        console.log('setting token and user info into storage', jwtToken);
        if (jwtToken) {
            localStorage.setItem(STORAGE_KEY_TOKEN, jwtToken.token);
            localStorage.setItem(STORAGE_KEY_USERNAME, jwtToken.username);
            return;
        }
        console.error('empty jwtToken object to be stored in local storage');
    }

    public removeTokenAndUserInfo() {
        console.log('on removing \'token\' from local storage', localStorage.getItem(STORAGE_KEY_TOKEN));
        localStorage.removeItem(STORAGE_KEY_TOKEN);
        console.log('on removing \'username\' from local storage', localStorage.getItem(STORAGE_KEY_USERNAME));
        localStorage.removeItem(STORAGE_KEY_USERNAME);
    }

}
