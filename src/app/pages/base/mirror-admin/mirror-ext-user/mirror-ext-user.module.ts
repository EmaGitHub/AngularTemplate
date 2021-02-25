import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtUserListComponent } from './pages/ext-user-list/ext-user-list.component';
import { ExtUserEditComponent } from './pages/ext-user-edit/ext-user-edit.component';

@NgModule({
  declarations: [ExtUserListComponent, ExtUserEditComponent],
  imports: [
    CommonModule
  ]
})
export class MirrorExtUserModule { }
