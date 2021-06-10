import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPUserLoginComponent } from './comp-user-login.component';

describe('COMPUserLoginComponent', () => {
  let component: COMPUserLoginComponent;
  let fixture: ComponentFixture<COMPUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPUserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
