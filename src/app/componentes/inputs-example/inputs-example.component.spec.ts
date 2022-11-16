import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsExampleComponent } from './inputs-example.component';

describe('InputsExampleComponent', () => {
  let component: InputsExampleComponent;
  let fixture: ComponentFixture<InputsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
