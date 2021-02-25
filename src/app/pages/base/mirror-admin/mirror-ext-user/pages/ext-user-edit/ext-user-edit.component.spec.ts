import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtUserEditComponent } from './ext-user-edit.component';

describe('ExtUserEditComponent', () => {
  let component: ExtUserEditComponent;
  let fixture: ComponentFixture<ExtUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
