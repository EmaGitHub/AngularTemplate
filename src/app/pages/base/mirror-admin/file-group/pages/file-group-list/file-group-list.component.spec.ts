import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGroupListComponent } from './file-group-list.component';

describe('FileGroupListComponent', () => {
  let component: FileGroupListComponent;
  let fixture: ComponentFixture<FileGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
