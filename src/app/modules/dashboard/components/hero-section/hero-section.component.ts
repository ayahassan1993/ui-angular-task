import { Component, output } from "@angular/core";
declare var Swiper: any;

@Component({
  selector: "hero-section",
  standalone: true,
  imports: [],
  templateUrl: "./hero-section.component.html",
  styleUrl: "./hero-section.component.scss",
})
export class HeroSectionComponent {
  categoryEmitter = output<string>();
  ngOnInit(): void {
    this.initSlider();
  }
  initSlider() {
    new Swiper(".hero-swiper", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
