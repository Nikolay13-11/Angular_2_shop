import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

import { HeaderComponent } from "./core/components/header/header.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterModule]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = 'Dive Shop';
  }

  onGoHome() {
    this.router.navigate(['/']);
  }
}
// ok
