import { Component, signal, WritableSignal } from "@angular/core";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { FlashSaleSectionComponent } from "../../components/flash-sale-section/flash-sale-section.component";
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";
import { BestSellersSectionComponent } from "../../components/best-sellers-section/best-sellers-section.component";
import { OffersSectionComponent } from "../../components/offers-section/offers-section.component";
import { ProductsSectionComponent } from "../../components/products-section/products-section.component";
import { NewArraivalsSectionComponent } from "../../components/new-arraivals-section/new-arraivals-section.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    HeroSectionComponent,
    FlashSaleSectionComponent,
    CategoriesSectionComponent,
    BestSellersSectionComponent,
    OffersSectionComponent,
    ProductsSectionComponent,
    NewArraivalsSectionComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  category: WritableSignal<string> = signal("");
}
