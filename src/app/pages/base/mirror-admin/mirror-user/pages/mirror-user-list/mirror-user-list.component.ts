import { Component, OnInit } from '@angular/core';
import { merge, of, Subscription } from 'rxjs';
import { MirrorUserService } from '../../services/mirror-user.service';
import { MirrorUser } from '../../models/MirrorUser';
import { HttpErrorResponse } from '@angular/common/http';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { UtilService } from 'src/app/core/services/utils/util.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-mirror-user-list',
  templateUrl: './mirror-user-list.component.html',
  styleUrls: ['./mirror-user-list.component.scss'],
  animations: [
    trigger('insertRemove', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class MirrorUserListComponent implements OnInit {

  formTitle: String = "Ricerca utente esterno";
  buttonLabel: String = "Cerca";

  mirrorUsersList: MirrorUser[];
  resultDivVisible: boolean = false;
  isLoading: boolean = false;

  private mirrorUsersSubscription: Subscription;

  constructor(private mirrorUserService: MirrorUserService, private utilService: UtilService) { }

  ngOnInit(): void {
  }

  submit() {
    this.mirrorUsersSubscription = merge().pipe(
      startWith({}),
      switchMap(() => {
        this.resultDivVisible = true;
        this.isLoading = true;

        return this.mirrorUserService.findUsers(1).pipe(
          catchError((err: HttpErrorResponse) => {
            console.error('error loading mirror users', err);

            this.utilService.manageRestResponseError(err);

            this.isLoading = false;

            return of(null);
          })
        );
      })
    ).subscribe((res: RestResponse<MirrorUser>) => {

      
      setTimeout(() => {
          
        console.log('success on load mirror users', res);
        this.isLoading = false;
        if (res) {
          console.log("USER RES "+JSON.stringify(res))
        }

      }, 2000);

      
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.utilService.manageRestResponseError(err);
      }
    );
  }
}
