import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { CartModule } from "./cart/cart.module";
import { ProductsModule } from "./products/products.module";
import { HeaderComponent } from "./core/components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ CartModule, ProductsModule, HeaderComponent]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = 'Dive Shop';
  }
}
