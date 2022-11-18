import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderComponentComponent } from './gender.component.component';

describe('GenderComponentComponent', () => {
  let component: GenderComponentComponent;
  let fixture: ComponentFixture<GenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
