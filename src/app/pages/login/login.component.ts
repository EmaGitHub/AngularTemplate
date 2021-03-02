import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/shared/domain/auth/credentials';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtToken } from 'src/app/shared/domain/auth/jwt-token';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/general-config/auth.service';
import { EnvironmentService } from 'src/app/core/services/general-config/environment.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginButtonDisabled = false;
  public isLoadingResults = false;

  private loginSubscription: Subscription;

  credentials: Credentials = {
    username: null,
    password: null
  };

  credentialsForm: FormGroup;

  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private environmentService: EnvironmentService,
              private toastMessageService: ToastMessageService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      usernameGroup: [this.credentials.username, [Validators.required]],
      passwordGroup: [this.credentials.password, Validators.required]
    });
  }

  public emptyProperty(formGroup: FormGroup, propName: string, event: any) {
    event.preventDefault();
    formGroup.get(propName).markAsTouched();
    formGroup.get(propName).setValue('');
  }

  public onFormSubmit(model: any) {
    this.loginButtonDisabled = true;
    this.isLoadingResults = true;

    this.credentials.username = model.usernameGroup;
    this.credentials.password = model.passwordGroup;


    const url = this.environmentService.environment.apiMirrorUser + '/authenticate';

    this.loginSubscription = this.httpClient.post<any>(url, this.credentials).subscribe(
      res => {
        console.log('jwt token response on login', res);

        this.loginButtonDisabled = false;
        this.isLoadingResults = false;

        // store token info into the local storage
        const jwtToken: JwtToken = res.payload;
        // this.authService.setTokenAndUserInfo(jwtToken);
        // gateway page
        this.router.navigate(['/file-group']);
        return;
      },
      err => {
        console.log('error on login form submit', err);

        this.loginButtonDisabled = false;
        this.isLoadingResults = false;

        // login failed message
        this.toastMessageService.next({ severity: 'error', summary: 'Error', detail: this.translate.instant('message.error.loginFailed') });
      }
    );
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

}
