import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URecepiesComponent } from './u-recepies.component';

describe('URecepiesComponent', () => {
  let component: URecepiesComponent;
  let fixture: ComponentFixture<URecepiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URecepiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
