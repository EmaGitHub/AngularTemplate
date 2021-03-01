import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MirrorUserListComponent } from './pages/mirror-user-list/mirror-user-list.component';
import { MirrorUserEditComponent } from './pages/mirror-user-edit/mirror-user-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MirrorUserService } from './services/mirror-user.service';
import { MirrorUserFormComponent } from './components/mirror-user-form/mirror-user-form.component';
import { MirrorUserCreateComponent } from './pages/mirror-user-create/mirror-user-create.component';
import { TestComponent } from './pages/test/test.component';
import { MirrorUserRowComponent } from './components/mirror-user-row/mirror-user-row.component';


@NgModule({
  declarations: [
    MirrorUserListComponent, 
    MirrorUserEditComponent,
    MirrorUserCreateComponent,
    MirrorUserFormComponent,
    MirrorUserRowComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    MirrorUserService
  ]
})
export class MirrorUserModule { }
