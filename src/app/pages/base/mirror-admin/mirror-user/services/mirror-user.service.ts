import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestPagingResponse } from 'src/app/shared/domain/http/rest-paging-response';
import { EnvironmentService } from 'src/app/core/services/general-config/environment.service';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { Utils } from 'src/app/shared/utils/utils';
import { MirrorUser } from '../models/MirrorUser';

@Injectable()
export class MirrorUserService {


    constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) { }

    public findUsers(companyAffiliation: number): Observable<RestPagingResponse<MirrorUser[]>> {
        const url = this.environmentService.environment.apiVdrUrl + `/users?companyAffiliation=${companyAffiliation}`;
        console.log(`HTTP GET ${url}`);

        var u: MirrorUser = {id: 1, name: "Carlo", lastName: "Rossi", status: true};
        var a: MirrorUser[] =  [u];

        return of({data: a, totalItems: 0});
        this.httpClient.get<RestResponse<MirrorUser>>(url);
    }

    /* public findUsers(companyAffiliation: number): Observable<RestResponse<CustomerDetail>> {
        const url = this.environmentService.environment.apiAdminUrl + `/users/${customerId}?fileGroupId=${fileGroupId}`;
        console.log(`HTTP GET ${url}`);
        return this.httpClient.get<RestResponse<CustomerDetail>>(url);
    } */

    /* public findCustomers(params: any): Observable<RestPagingResponse<Customer[]>> {
        const urlParams = Utils.buildUrlParams(params);
        const url = this.environmentService.environment.apiAdminUrl + `/customer?${urlParams}`;
        console.log(`HTTP GET ${url}`);
        return this.httpClient.get<RestPagingResponse<Customer[]>>(url);
    } */

}
