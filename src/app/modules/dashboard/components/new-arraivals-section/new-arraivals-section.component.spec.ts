import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArraivalsSectionComponent } from './new-arraivals-section.component';

describe('NewArraivalsSectionComponent', () => {
  let component: NewArraivalsSectionComponent;
  let fixture: ComponentFixture<NewArraivalsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArraivalsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArraivalsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
