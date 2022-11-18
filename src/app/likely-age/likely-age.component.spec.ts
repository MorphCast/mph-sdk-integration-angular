import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikelyAgeComponent } from './likely-age.component';

describe('LikelyAgeComponent', () => {
  let component: LikelyAgeComponent;
  let fixture: ComponentFixture<LikelyAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikelyAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikelyAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
