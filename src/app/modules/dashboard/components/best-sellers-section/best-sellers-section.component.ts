import { Component, computed, input, Signal } from "@angular/core";
import { BestSeller } from "../../constants/products.const";
import { Product } from "../../models/product.model";
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "best-sellers-section",
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: "./best-sellers-section.component.html",
  styleUrl: "./best-sellers-section.component.scss",
})
export class BestSellersSectionComponent {
  bestSeller: Product[] = BestSeller;
  category = input<string>();
  filterdProducts: Signal<Product[]> = computed(() =>
    this.bestSeller.filter((product) =>
      this.category() ? product.category == this.category() : product
    )
  );
}
