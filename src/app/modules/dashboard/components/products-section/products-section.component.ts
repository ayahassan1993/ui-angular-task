import { Component, computed, input, Signal } from "@angular/core";
import { Product } from "../../models/product.model";
import { Products } from "../../constants/products.const";
import { ProductCardComponent } from "../product-card/product-card.component";
declare var Swiper: any;

@Component({
  selector: "products-section",
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: "./products-section.component.html",
  styleUrl: "./products-section.component.scss",
})
export class ProductsSectionComponent {
  products: Product[] = Products;
  category = input<string>();
  filterdProducts: Signal<Product[]> = computed(() =>
    this.products.filter((product) =>
      this.category() ? product.category == this.category() : product
    )
  );

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider() {
    new Swiper(".products-swiper", {
      slidesPerView: 4, // Show 2 items per view

      grid: {
        rows: 2, // Set 2 rows
      },
      spaceBetween: 30,
      navigation: {
        nextEl: ".products-swiper-button-next",
        prevEl: ".products-swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
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
          slidesPerView: 4,
        },
      },
    });
  }
}
