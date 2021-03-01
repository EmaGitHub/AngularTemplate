import { Router, NavigationStart } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from './shared/domain/enums/lang';
import { MessageService } from 'primeng/api';
import { LanguageService } from './core/services/general-config/language.service';
import { ToastMessageService } from './core/services/utils/toast-message.service';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalMessageService } from './core/services/utils/modal-message.service';
import { RestResponse } from './shared/domain/http/rest-response';
import { UserService } from './core/services/utils/user.service';
import { catchError, map } from 'rxjs/operators';
import { UtilService } from './core/services/utils/util.service';
import { of, Subscription } from 'rxjs';
import { SideMenuService } from './core/services/utils/side-menu.service';
import { User } from './shared/model/user.model';
import { TestService } from './core/services/utils/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sessionExpiredModal') sessionExpiredModal: ModalComponent;

  @ViewChild('logoutModal') logoutModal: ModalComponent;

  private refreshSubscription: Subscription;
  private userSubscription: Subscription;
  private toastMessagesSubscription: Subscription;
  private expiredSessionMessagesSubscription: Subscription;
  private logoutMessageSubscription: Subscription;

  public logoutSuccessed: boolean;

  constructor(private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router,
    private messageService: MessageService,
    private toastMessageService: ToastMessageService,
    private modalMessageService: ModalMessageService,
    private userService: UserService,
    private utilService: UtilService,
    private sideMenuService: SideMenuService) {
    this.initTranslateDate();
    this.initDefaultLanguage();
    this.initRefreshSubscription();
  }

  ngOnInit() {
    this.toastMessagesSubscription = this.toastMessageService.toastMessageSubjectAsObservable.subscribe(
      res => {
        this.messageService.add({ ...res, life: 5000 });
      },
      err => {
        console.log(err);
      });

    this.expiredSessionMessagesSubscription = this.modalMessageService.modalMessageSubjectAsObservable.subscribe(
      () => {
        this.sessionExpiredModal.toggle(null);
        setTimeout(() => {
          location.reload();
        }, 4000);
      },
      err => {
        console.log(err);
      });

    this.logoutMessageSubscription = this.utilService.logoutSubjectAsObservable.subscribe(
      (logoutMessage: string) => {
        console.log('logout message', logoutMessage);

        if (logoutMessage === 'success') {
          this.logoutSuccessed = true;
          this.logoutModal.toggle(null);
          // ricarica la pagina se logout riesce
          setTimeout(() => location.reload(), 2000);
        } else {
          this.logoutSuccessed = false;
          this.logoutModal.toggle(null);
          // altrimenti nasconde il modal
          setTimeout(() => this.logoutModal.close(), 2000);
        }
      },
      err => {
        console.log(err);
      });

    //this.findUserInfo();
  }

  private initDefaultLanguage() {
    let defaultLang = Lang.IT;

    let browserLang = window.navigator && window.navigator.language ? window.navigator.language : (navigator ? navigator.language : null);
    if (browserLang && browserLang === 'en') {
      defaultLang = Lang.EN;
    }
    console.log('init default language', defaultLang);

    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
    //this.languageService.nextLanguageChange(defaultLang);
  }

  private initRefreshSubscription() {
    this.refreshSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let browserRefresh = !this.router.navigated;
        if (browserRefresh) {
          let lastSidemenuLinkSelected = this.sideMenuService.getSidemenuLinkId();
          this.sideMenuService.pageChoose(lastSidemenuLinkSelected);
        }
      }
    });
  }

  private findUserInfo() {
    console.log('http request for USER');
    this.userSubscription = this.userService.findLoggedUserData().pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('error on loading USER');
        this.utilService.manageRestResponseError(err);
        return of();
      })
    ).pipe(
      map((res: RestResponse<User>): User => {
        console.log('on map USER', res);
        return res.data;
      })
    ).subscribe((user: User) => {
      console.log('on loading USER', user);
      let flag: boolean = this.userService.saveUserDataInLocalStorage(user);
      if (flag === true) {
        console.log('user saved in local storage', user);
      } else {
        console.error('user NOT saved in local storage', user);
      }
    });
  }

  private initTranslateDate() {
    this.translate.addLangs([Lang.IT, Lang.EN]);
    this.translate.setDefaultLang(Lang.IT);
    this.translate.use(Lang.IT);
    //this.languageService.nextLanguageChange(Lang.IT);
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.toastMessagesSubscription) {
      this.toastMessagesSubscription.unsubscribe();
    }
    if (this.expiredSessionMessagesSubscription) {
      this.expiredSessionMessagesSubscription.unsubscribe();
    }
    if (this.logoutMessageSubscription) {
      this.logoutMessageSubscription.unsubscribe();
    }
  }
}
