import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { LocationModel } from './models/location';
import { LocationService } from './services/location.service';
import { SpFilterComponent } from './sp-filter/sp-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(SpFilterComponent) filterComponent!: SpFilterComponent;

  locationItems: LocationModel[] = [];
  selectedLocationItems: LocationModel[] = [];

  constructor(private payloadService: LocationService) {}

  ngAfterViewInit(): void {
    this.filterComponent.filter.pipe(
      switchMap((filterKeyword: string) => this.payloadService.getFilteredLocations(filterKeyword))
    )
    .subscribe((locationItems: LocationModel[]) => this.handlePayload(locationItems));
  }

  ngOnInit(): void {
    this.payloadService.getFilteredLocations('')
      .subscribe((locationItems: LocationModel[]) => this.handlePayload(locationItems));
  }

  private handlePayload(locationItems: LocationModel[]): void {
    this.locationItems = locationItems;
    console.log(locationItems);
  }

  onSave(): void {
    console.log('Selected items: ', this.selectedLocationItems);
  }

  onListItemSelected(locationItems: LocationModel[]): void {
    this.selectedLocationItems = locationItems;
  }
}
