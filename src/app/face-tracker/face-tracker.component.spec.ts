import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceTrackerComponent } from './face-tracker.component';

describe('FaceTrackerComponent', () => {
  let component: FaceTrackerComponent;
  let fixture: ComponentFixture<FaceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
