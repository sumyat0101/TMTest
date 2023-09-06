import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointRelationComponent } from './point-relation.component';

describe('PointRelationComponent', () => {
  let component: PointRelationComponent;
  let fixture: ComponentFixture<PointRelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointRelationComponent]
    });
    fixture = TestBed.createComponent(PointRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
