import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileGroupListComponent } from './pages/file-group-list/file-group-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FileGroupListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FileGroupModule { }
