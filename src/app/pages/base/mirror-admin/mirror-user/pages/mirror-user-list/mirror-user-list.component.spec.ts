import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorUserListComponent } from './mirror-user-list.component';

describe('MirrorUserListComponent', () => {
  let component: MirrorUserListComponent;
  let fixture: ComponentFixture<MirrorUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
