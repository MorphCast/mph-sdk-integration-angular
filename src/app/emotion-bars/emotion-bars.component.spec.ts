import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionBarsComponent } from './emotion-bars.component';

describe('EmotionBarsComponent', () => {
  let component: EmotionBarsComponent;
  let fixture: ComponentFixture<EmotionBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
