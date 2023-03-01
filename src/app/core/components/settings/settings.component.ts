import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppSettingsService} from "../../services/app-settings.service";
import {SharedModule} from "../../../shared/shared.module";
import {Methods} from "../../models/settings.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class SettingsComponent implements OnInit, OnDestroy {
  methods = Object.values(Methods);
  selected!: Methods[];

  private unsubscribe: Subject<void> = new Subject();

  constructor(private settingService: AppSettingsService) {}

  ngOnInit() {
    this.settingService.getLogMethods().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(settings => this.selected = settings);
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  open(state: boolean) {
    if(!state) {
      this.settingService.setLogMethods(this.selected);
    }
  }
}
