import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit(): void {
    //Получение product id из текущего пути
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    
    //Получение полдукта, кот. отвечает предоставленному пути
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
