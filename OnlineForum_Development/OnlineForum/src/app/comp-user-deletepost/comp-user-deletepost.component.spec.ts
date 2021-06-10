import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPUserDeletepostComponent } from './comp-user-deletepost.component';

describe('COMPUserDeletepostComponent', () => {
  let component: COMPUserDeletepostComponent;
  let fixture: ComponentFixture<COMPUserDeletepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPUserDeletepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPUserDeletepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
