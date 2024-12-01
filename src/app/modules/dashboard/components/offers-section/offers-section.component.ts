import { Component, input } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "offers-section",
  standalone: true,
  imports: [],
  templateUrl: "./offers-section.component.html",
  styleUrl: "./offers-section.component.scss",
})
export class OffersSectionComponent {
  category = input<string>();
  private subscription!: Subscription;
  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  ngOnInit(): void {
    this.startCountdown();
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
