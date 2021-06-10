import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPAdminViewforumComponent } from './comp-admin-viewforum.component';

describe('COMPAdminViewforumComponent', () => {
  let component: COMPAdminViewforumComponent;
  let fixture: ComponentFixture<COMPAdminViewforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPAdminViewforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPAdminViewforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
