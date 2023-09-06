import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StypesetupComponent } from './stypesetup.component';

describe('StypesetupComponent', () => {
  let component: StypesetupComponent;
  let fixture: ComponentFixture<StypesetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StypesetupComponent]
    });
    fixture = TestBed.createComponent(StypesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
