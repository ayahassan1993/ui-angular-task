import { Component, computed, input, Signal } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { Product } from "../../models/product.model";
import { ProductCardComponent } from "../product-card/product-card.component";
import { flashSaleProducts } from "./../../constants/products.const";
declare var Swiper: any;

@Component({
  selector: "flash-sale-section",
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: "./flash-sale-section.component.html",
  styleUrl: "./flash-sale-section.component.scss",
})
export class FlashSaleSectionComponent {
  category = input<string>();
  private subscription!: Subscription;
  flashSaleProducts: Product[] = flashSaleProducts;
  filterdProducts: Signal<Product[]> = computed(() =>
    this.flashSaleProducts.filter((product) =>
      this.category() ? product.category == this.category() : product
    )
  );

  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  ngOnInit(): void {
    this.startCountdown();
    this.initSlider();
  }

  initSlider() {
    new Swiper(".flash-sale-swiper", {
      spaceBetween: 30,
      slidesPerView: 4.5,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4.5,
        },
      },
    });
  }

  private startCountdown(): void {
    const targetTime = new Date("2025-01-01").getTime();

    this.subscription = interval(1000).subscribe(() => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference > 0) {
        this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.countdown.minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      } else {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
