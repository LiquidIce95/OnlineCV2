import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotSimulationComponent } from './dot-simulation.component';

describe('DotSimulationComponent', () => {
  let component: DotSimulationComponent;
  let fixture: ComponentFixture<DotSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotSimulationComponent]
    });
    fixture = TestBed.createComponent(DotSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
