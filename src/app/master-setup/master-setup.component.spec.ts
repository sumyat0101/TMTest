import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSetupComponent } from './master-setup.component';

describe('MasterSetupComponent', () => {
  let component: MasterSetupComponent;
  let fixture: ComponentFixture<MasterSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterSetupComponent]
    });
    fixture = TestBed.createComponent(MasterSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
