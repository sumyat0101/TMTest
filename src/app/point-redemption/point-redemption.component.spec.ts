import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointRedemptionComponent } from './point-redemption.component';

describe('PointRedemptionComponent', () => {
  let component: PointRedemptionComponent;
  let fixture: ComponentFixture<PointRedemptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointRedemptionComponent]
    });
    fixture = TestBed.createComponent(PointRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
