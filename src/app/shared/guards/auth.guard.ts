import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/general-config/auth.service';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/core/services/general-config/environment.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, private environmentService: EnvironmentService) { }

    canActivate() {
        if (!this.environmentService.environment.production) {
            console.log('[CanActivate] environment is NOT prod');
            return true;
        }

        const isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            console.log('[CanActivate] user NOT authenticated', 'auth guard does NOT allow and redirects to LOGIN page');
            this.router.navigate(['/login']);
            return false;
        }
        
        return true;
    }

}