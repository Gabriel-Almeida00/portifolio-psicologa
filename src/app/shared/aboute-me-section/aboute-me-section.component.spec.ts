import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteMeSectionComponent } from './aboute-me-section.component';

describe('AbouteMeSectionComponent', () => {
  let component: AbouteMeSectionComponent;
  let fixture: ComponentFixture<AbouteMeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouteMeSectionComponent]
    });
    fixture = TestBed.createComponent(AbouteMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
