import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorUserFormComponent } from './mirror-user-form.component';

describe('MirrorUserFormComponent', () => {
  let component: MirrorUserFormComponent;
  let fixture: ComponentFixture<MirrorUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
