import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMaisButtonComponent } from './ver-mais-button.component';

describe('VerMaisButtonComponent', () => {
  let component: VerMaisButtonComponent;
  let fixture: ComponentFixture<VerMaisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMaisButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMaisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
