import { HttpClientService } from './../http-client.service';
import { User } from 'src/app/shared/model/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { EnvironmentService } from '../general-config/environment.service';

@Injectable()
export class UserService {

    constructor(private environmentService: EnvironmentService, private httpClientService: HttpClientService) { }

    public findLoggedUserData(): Observable<RestResponse<User>> {
        const url = this.environmentService.environment.apiUserManager + `/login-data`;
        console.log(`HTTP GET ${url}`);
        return this.httpClientService.getWithRetry<RestResponse<User>>(url, 3);
    }

    public saveUserDataInLocalStorage(user: User) {
        localStorage.setItem('user-name', user.name);
        localStorage.setItem('user-surname', user.surname);
        localStorage.setItem('user-id', user.userId);
        return true;
    }

    public getUser(): User {
        const user = {} as User;
        user.name = localStorage.getItem('user-name');
        user.surname = localStorage.getItem('user-surname');
        user.userId = localStorage.getItem('user-id');
        return user;
    }

    public getFullName(): string {
        const first: string = localStorage.getItem('user-name');
        const last: string = localStorage.getItem('user-surname');
        if (first || last) {
            return `${first} ${last}`
        }
        return null;
    }

    public getUserId() {
        return localStorage.getItem('user-id');
    }

    public getCompanyName(): string {
        return localStorage.getItem('company-name');
    }

    public getBusinessName(): string {
        return localStorage.getItem('business-name');
    }

}
