import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorUserCreateComponent } from './mirror-user-create.component';

describe('MirrorUserCreateComponent', () => {
  let component: MirrorUserCreateComponent;
  let fixture: ComponentFixture<MirrorUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
