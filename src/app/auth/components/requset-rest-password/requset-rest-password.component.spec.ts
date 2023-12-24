import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequsetRestPasswordComponent } from './requset-rest-password.component';

describe('RequsetRestPasswordComponent', () => {
  let component: RequsetRestPasswordComponent;
  let fixture: ComponentFixture<RequsetRestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequsetRestPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequsetRestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
