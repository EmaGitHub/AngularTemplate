import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SideMenuService {

    private _navigationTofirstPageSubject$: BehaviorSubject<any> = new BehaviorSubject<any>({ });

    constructor() { }

    get navigationTofirstPageSubjectAsObservable(): Observable<string> {
        return this._navigationTofirstPageSubject$.asObservable();
    }

    public firstPageChoose(sidebarMenuLinkId: string) {
        this.saveSidemenuLinkIdInLocalStorage(sidebarMenuLinkId);
        this._navigationTofirstPageSubject$.next(sidebarMenuLinkId);
    }

    public saveSidemenuLinkIdInLocalStorage(sidebarMenuLinkId: string) {
        localStorage.setItem('sidemenu-selection', sidebarMenuLinkId);
        return true;
    }

    public getSidemenuLinkId(){
        let lastItemSelected: string =  localStorage.getItem('sidemenu-selection');
        console.log("get last sidemenu item selected: "+lastItemSelected);
        return lastItemSelected;
    }

    public sidemenuLinkSelected(sidebarMenuLinkId: string) {
        localStorage.setItem('sidemenu-selection', sidebarMenuLinkId);
        return true;
    }

}
