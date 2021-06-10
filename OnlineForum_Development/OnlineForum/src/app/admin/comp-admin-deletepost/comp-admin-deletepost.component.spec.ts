import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPAdminDeletepostComponent } from './comp-admin-deletepost.component';

describe('COMPAdminDeletepostComponent', () => {
  let component: COMPAdminDeletepostComponent;
  let fixture: ComponentFixture<COMPAdminDeletepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPAdminDeletepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPAdminDeletepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
