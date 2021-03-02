import { MirrorUser } from './../models/MirrorUser';
import { Company } from './../models/Company';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestPagingResponse } from 'src/app/shared/domain/http/rest-paging-response';
import { EnvironmentService } from 'src/app/core/services/general-config/environment.service';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { Utils } from 'src/app/shared/utils/utils';

@Injectable()
export class MirrorUserService {


    constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) { }

    public findUsers(companyAffiliation: number): Observable<RestPagingResponse<MirrorUser[]>> {
        const url = this.environmentService.environment.apiUserManager + `/users?companyAffiliation=${companyAffiliation}`;
        console.log(`HTTP GET ${url}`);

        return this.httpClient.get<RestPagingResponse<MirrorUser[]>>('assets/config/mirror-admin/mirror-users.json');
        this.httpClient.get<RestResponse<MirrorUser>>(url);
    }

    public getCompanies(): Observable<Company[]> {
        const url = this.environmentService.environment.apiUserManager + `/mirror/user/investorCompany`;
        console.log(`HTTP GET ${url}`);

        //return this.httpClient.get<Company[]>('assets/config/mirror-admin/companies.json');
        return this.httpClient.get<Company[]>(url);
    }

    public getMirId(): Observable<String> {
        const url = this.environmentService.environment.apiUserManager + `/mirror/user/mirId`;
        console.log(`HTTP GET ${url}`);

        //return this.httpClient.get<String>('assets/config/mirror-admin/nextId.json');
        return this.httpClient.get<String>(url);
    }

    public createUser(user: MirrorUser): Observable<any> {
        const url = this.environmentService.environment.apiUserManager + `/mirror/user`;
        console.log(`HTTP POST ${url}`);

        return this.httpClient.post(url, user);
    }
}
