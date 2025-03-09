import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFeaturesComponent } from './carousel-features.component';

describe('CarouselFeaturesComponent', () => {
  let component: CarouselFeaturesComponent;
  let fixture: ComponentFixture<CarouselFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
