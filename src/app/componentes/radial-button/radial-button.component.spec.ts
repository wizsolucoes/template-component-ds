import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialButtonComponent } from './radial-button.component';

describe('RadialButtonComponent', () => {
  let component: RadialButtonComponent;
  let fixture: ComponentFixture<RadialButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RadialButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
