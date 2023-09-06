import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawProgramComponent } from './lucky-draw-program.component';

describe('LuckyDrawProgramComponent', () => {
  let component: LuckyDrawProgramComponent;
  let fixture: ComponentFixture<LuckyDrawProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuckyDrawProgramComponent]
    });
    fixture = TestBed.createComponent(LuckyDrawProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
