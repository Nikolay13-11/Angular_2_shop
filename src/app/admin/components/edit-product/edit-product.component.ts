import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlTree, Data} from "@angular/router";
import {Observable, Subject, takeUntil, map} from "rxjs";

import {CanComponentDeactivate} from "../../../core/models/can-component-deactivate.interface";

import {DialogService} from "../../../core/services/dialog.service";
import {IProductModel} from "../../../products/models/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private unsubscribe: Subject<void> = new Subject();
  product!: IProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.pipe(
      map((data: Data) => data['product']),
      takeUntil(this.unsubscribe)
    )
      .subscribe((product: IProductModel) => {
        this.product = {...product}
      })
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  onGoBack() {
    this.router.navigate(['/admin/products']);
  }

  canDeactivate(): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.dialogService.confirm('Do you want to leave this page?');
  }
}
