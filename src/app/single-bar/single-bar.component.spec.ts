import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBarComponent } from './single-bar.component';

describe('SingleBarComponent', () => {
  let component: SingleBarComponent;
  let fixture: ComponentFixture<SingleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
