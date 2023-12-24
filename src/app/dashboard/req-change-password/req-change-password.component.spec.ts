import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqChangePasswordComponent } from './req-change-password.component';

describe('ReqChangePasswordComponent', () => {
  let component: ReqChangePasswordComponent;
  let fixture: ComponentFixture<ReqChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
