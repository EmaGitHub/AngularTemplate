import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorUserRowComponent } from './mirror-user-row.component';

describe('MirrorUserRowComponent', () => {
  let component: MirrorUserRowComponent;
  let fixture: ComponentFixture<MirrorUserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorUserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorUserRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
