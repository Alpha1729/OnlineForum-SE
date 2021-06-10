import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPUserViewforumComponent } from './comp-user-viewforum.component';

describe('COMPUserViewforumComponent', () => {
  let component: COMPUserViewforumComponent;
  let fixture: ComponentFixture<COMPUserViewforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPUserViewforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPUserViewforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
