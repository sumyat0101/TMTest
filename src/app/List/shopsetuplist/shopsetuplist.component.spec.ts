import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsetuplistComponent } from './shopsetuplist.component';

describe('ShopsetuplistComponent', () => {
  let component: ShopsetuplistComponent;
  let fixture: ComponentFixture<ShopsetuplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopsetuplistComponent]
    });
    fixture = TestBed.createComponent(ShopsetuplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
