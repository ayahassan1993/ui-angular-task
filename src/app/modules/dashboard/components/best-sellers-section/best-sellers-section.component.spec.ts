import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersSectionComponent } from './best-sellers-section.component';

describe('BestSellersSectionComponent', () => {
  let component: BestSellersSectionComponent;
  let fixture: ComponentFixture<BestSellersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
