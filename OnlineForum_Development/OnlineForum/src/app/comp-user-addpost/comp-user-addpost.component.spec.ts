import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPUserAddpostComponent } from './comp-user-addpost.component';

describe('COMPUserAddpostComponent', () => {
  let component: COMPUserAddpostComponent;
  let fixture: ComponentFixture<COMPUserAddpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPUserAddpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPUserAddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
