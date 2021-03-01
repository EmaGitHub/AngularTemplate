import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseComponent } from './pages/base/base.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FileGroupListComponent } from './pages/base/mirror-admin/file-group/pages/file-group-list/file-group-list.component';
import { MirrorUserCreateComponent } from './pages/base/mirror-admin/mirror-user/pages/mirror-user-create/mirror-user-create.component';
import { MirrorUserEditComponent } from './pages/base/mirror-admin/mirror-user/pages/mirror-user-edit/mirror-user-edit.component';
import { MirrorUserListComponent } from './pages/base/mirror-admin/mirror-user/pages/mirror-user-list/mirror-user-list.component';
import { TestComponent } from './pages/base/mirror-admin/mirror-user/pages/test/test.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'mirror-admin',
        component: BaseComponent,
        children: [
            {
                path: 'mirror-user',
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: MirrorUserListComponent },
                    { path: 'edit', component: MirrorUserEditComponent },
                    { path: 'create', component: MirrorUserCreateComponent },
                    { path: 'test', component: TestComponent }
                ]
            },
            {
                path: 'file-group',
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: FileGroupListComponent },
                ]
            }
        ]
    },
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
