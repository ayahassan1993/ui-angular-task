import { CommonModule } from "@angular/common";
import { Component, signal, WritableSignal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  showMenu: WritableSignal<boolean> = signal(false);
  showMenuProfile: WritableSignal<boolean> = signal(false);
  showMobileMenu: WritableSignal<boolean> = signal(false);
}
