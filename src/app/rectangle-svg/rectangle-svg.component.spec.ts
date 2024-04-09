import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleSvgComponent } from './rectangle-svg.component';

describe('RectangleSvgComponent', () => {
  let component: RectangleSvgComponent;
  let fixture: ComponentFixture<RectangleSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectangleSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RectangleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
