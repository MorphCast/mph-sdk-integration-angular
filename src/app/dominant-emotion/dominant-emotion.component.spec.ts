import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominantEmotionComponent } from './dominant-emotion.component';

describe('DominantEmotionComponent', () => {
  let component: DominantEmotionComponent;
  let fixture: ComponentFixture<DominantEmotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominantEmotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominantEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
