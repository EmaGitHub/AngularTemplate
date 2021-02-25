import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseComponent } from './pages/base/base.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FileGroupListComponent } from './pages/base/mirror-admin/file-group/pages/file-group-list/file-group-list.component';
import { ExtUserListComponent } from './pages/base/mirror-admin/mirror-ext-user/pages/ext-user-list/ext-user-list.component';
import { ExtUserEditComponent } from './pages/base/mirror-admin/mirror-ext-user/pages/ext-user-edit/ext-user-edit.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: BaseComponent,
    //     children: [
    //         { path: '', redirectTo: 'file-group', pathMatch: 'full' },
    //         { path: 'file-group', loadChildren: () => import('./pages/base/mirror-admin/file-group/file-group.module').then(m => m.FileGroupModule) },
    //         { path: 'customer', loadChildren: () => import('./pages/base/mirror-admin/customer/customer.module').then(m => m.CustomerModule) },
    //         { path: 'customer/file-group/:fileGroupId', loadChildren: () => import('./pages/base/mirror-admin/customer/customer.module').then(m => m.CustomerModule) },
    //         { path: 'file', loadChildren: () => import('./pages/base/mirror-admin/file/file.module').then(m => m.FileModule) }
    //     ]
    // },

    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'mirror-admin',
        component: BaseComponent,
        children: [
            {
                path: 'ext-user',
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: ExtUserListComponent },
                    { path: 'edit', component: ExtUserEditComponent }
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
