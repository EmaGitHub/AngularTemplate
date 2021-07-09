import { TokenService } from './services/general-config/token.service';
import { NgModule } from '@angular/core';
import { UtilService } from './services/utils/util.service';
import { UserService } from './services/utils/user.service';
import { SideMenuService } from './services/utils/side-menu.service';
import { MatPaginatorI18nService } from './services/utils/mat-paginator-i18n.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    // *app services
    UtilService,
    UserService,
    TokenService,
    SideMenuService,
    MatPaginatorI18nService
  ],
  exports: [
  ]
})
export class CoreModule { }
