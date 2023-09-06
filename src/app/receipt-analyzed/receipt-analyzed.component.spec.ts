import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptAnalyzedComponent } from './receipt-analyzed.component';

describe('ReceiptAnalyzedComponent', () => {
  let component: ReceiptAnalyzedComponent;
  let fixture: ComponentFixture<ReceiptAnalyzedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptAnalyzedComponent]
    });
    fixture = TestBed.createComponent(ReceiptAnalyzedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
