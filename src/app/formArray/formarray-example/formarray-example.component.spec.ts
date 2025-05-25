import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayExampleComponent } from './formarray-example.component';

describe('FormarrayExampleComponent', () => {
  let component: FormarrayExampleComponent;
  let fixture: ComponentFixture<FormarrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormarrayExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormarrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
