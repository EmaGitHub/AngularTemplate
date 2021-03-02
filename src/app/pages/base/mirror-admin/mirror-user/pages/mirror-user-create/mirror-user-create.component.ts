import { Company } from './../../models/Company';
import { MirrorUser } from './../../models/MirrorUser';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, merge, of } from 'rxjs';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/core/services/utils/util.service';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { MirrorUserService } from '../../services/mirror-user.service';

@Component({
  selector: 'app-mirror-user-create',
  templateUrl: './mirror-user-create.component.html',
  styleUrls: ['./mirror-user-create.component.css']
})
export class MirrorUserCreateComponent implements OnInit {

  isLoading: boolean = false;
  error: boolean = false;

  user: MirrorUser = new MirrorUser;
  companies: Company[];
  
  private subscriptionExecuted = 0;
  private companiesSubscription: Subscription;
  private nextUserIdSubscription: Subscription;

  constructor(private mirrorUserService: MirrorUserService, private utilService: UtilService) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.nextUserIdSubscription = merge().pipe(
      startWith({}),
      switchMap(() => {

        return this.mirrorUserService.getMirId().pipe(
          catchError((err: HttpErrorResponse) => {
            console.error('error loading sequence next UserId ', err);

            this.utilService.manageRestResponseError(err);
            this.isLoading = false;
            this.error = true
            return of(null);
          })
        );
      })
    ).subscribe((res: RestResponse<string>) => {
      console.log('success on load sequence next UserId ', res);
      this.subscriptionExecuted++;
      if (this.subscriptionExecuted == 2)
        this.isLoading = false;

      if (res) {
        this.user.userId = res.data;
      }        
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.error = true;
        this.utilService.manageRestResponseError(err);
      }
    );

    this.companiesSubscription = merge().pipe(
      startWith({}),
      switchMap(() => {

        return this.mirrorUserService.getCompanies().pipe(
          catchError((err: HttpErrorResponse) => {
            console.error('error loading companies ', err);

            this.utilService.manageRestResponseError(err);
            this.isLoading = false;
            this.error = true;
            return of(null);
          })
        );
      })
    ).subscribe((res: RestResponse<Company[]>) => {
      console.log('success on load companies ', res);
      this.subscriptionExecuted++;
      if (this.subscriptionExecuted == 2 )
        this.isLoading = false;

      if (res) {
        this.companies = res.data;
      }
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.error = true;
        this.utilService.manageRestResponseError(err);
      }
    );
  }

  createUser(user: MirrorUser) {
    console.log("creating user "+JSON.stringify(user));
    this.mirrorUserService.createUser(user).subscribe(
      (res: any) => {

      },
      (err: Error) => {

      }
    )
  }

}
