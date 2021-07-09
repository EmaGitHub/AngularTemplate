import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseComponent } from './pages/base/base.component';
import { WelcomeComponent } from './pages/account/welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                ]
            }
        ]
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
