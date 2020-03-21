import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxHeadComponent } from './parallax-head.component';

describe('ParallaxHeadComponent', () => {
  let component: ParallaxHeadComponent;
  let fixture: ComponentFixture<ParallaxHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
