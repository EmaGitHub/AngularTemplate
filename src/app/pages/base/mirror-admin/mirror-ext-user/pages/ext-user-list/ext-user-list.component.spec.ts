import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtUserListComponent } from './ext-user-list.component';

describe('ExtUserListComponent', () => {
  let component: ExtUserListComponent;
  let fixture: ComponentFixture<ExtUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
