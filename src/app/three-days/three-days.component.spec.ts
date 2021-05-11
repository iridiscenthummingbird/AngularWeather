import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDaysComponent } from './three-days.component';

describe('ThreeDaysComponent', () => {
  let component: ThreeDaysComponent;
  let fixture: ComponentFixture<ThreeDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
