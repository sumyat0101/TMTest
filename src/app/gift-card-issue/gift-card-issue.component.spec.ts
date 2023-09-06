import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardIssueComponent } from './gift-card-issue.component';

describe('GiftCardIssueComponent', () => {
  let component: GiftCardIssueComponent;
  let fixture: ComponentFixture<GiftCardIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftCardIssueComponent]
    });
    fixture = TestBed.createComponent(GiftCardIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
