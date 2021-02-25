import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/general-config/auth.service';
import { EnvironmentService } from 'src/app/core/services/general-config/environment.service';

@Injectable({
    providedIn: 'root'
})
export class UserAlreadyLoggedGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService, private environmentService: EnvironmentService) { }

    canActivate(): boolean {
        if (!this.environmentService.environment.production) {
            console.log('[UserAlreadyLoggedGuard] environment is NOT prod');
            return true;
        }

        if (this.authService.isAuthenticated()) {
            console.log('[UserAlreadyLoggedGuard] user already LOGGED trying to navigate to LOGIN or REGISTER page', 'redirect to home');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }

}