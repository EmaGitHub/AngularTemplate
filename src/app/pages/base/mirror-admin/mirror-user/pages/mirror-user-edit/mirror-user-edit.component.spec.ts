import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorUserEditComponent } from './mirror-user-edit.component';

describe('MirrorUserEditComponent', () => {
  let component: MirrorUserEditComponent;
  let fixture: ComponentFixture<MirrorUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
