import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Cart } from "../../models/cart";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any, public cartService: CartService) {}
}
