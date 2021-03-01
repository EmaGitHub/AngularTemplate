import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/general-config/auth.service';
import { EnvironmentService } from '../services/general-config/environment.service';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from '../services/general-config/token.service';

@Injectable({
    providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, 
                private environmentService: EnvironmentService,
                private tokenService: TokenService,
                private translate: TranslateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // i18n
        req = req.clone({
            setHeaders: {
                'Accept-Language': this.translate.getDefaultLang() === 'it' ? 'it' : 'en'
            }
        });

        if (req instanceof HttpResponse) {
            let token = req.headers.get('Token');
            if (token) {
                this.tokenService.saveTokenInLocalStorage(token);
                this.tokenService.nextTokenAcquired();
            }
        }

        // token send disabled in production
        /* if (!this.environmentService.environment.production) {
            const token = this.authService.getToken();
            if (token) {
                req = req.clone({
                    setHeaders: {
                        'X-FINDOMESTIC-AUTH': token
                    }
                });
            }
        } */
        return next.handle(req);
    }
}