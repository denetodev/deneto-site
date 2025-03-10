import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectButtonsComponent } from './project-buttons.component';

describe('ProjectButtonsComponent', () => {
  let component: ProjectButtonsComponent;
  let fixture: ComponentFixture<ProjectButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
