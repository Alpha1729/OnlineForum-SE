import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPAdminLoginComponent } from './comp-admin-login.component';

describe('COMPAdminLoginComponent', () => {
  let component: COMPAdminLoginComponent;
  let fixture: ComponentFixture<COMPAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPAdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
