import { Component } from "@angular/core";
import { categories } from "../../constants/products.const";
declare var Swiper: any;

@Component({
  selector: "categories-section",
  standalone: true,
  imports: [],
  templateUrl: "./categories-section.component.html",
  styleUrl: "./categories-section.component.scss",
})
export class CategoriesSectionComponent {
  categories = categories;

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider() {
    new Swiper(".categories-sale-swiper", {
      spaceBetween: 30,
      slidesPerView: 6,

      navigation: {
        nextEl: ".categories-swiper-button-next",
        prevEl: ".categories-swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    });
  }
}
