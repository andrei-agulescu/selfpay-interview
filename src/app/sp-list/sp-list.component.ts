import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationModel } from '../models/location';

interface SelectionModel {
  [key: string]: boolean;
}

@Component({
  selector: 'app-sp-list',
  templateUrl: './sp-list.component.html',
  styleUrls: ['./sp-list.component.css']
})
export class SpListComponent implements OnInit {

  @Input() locationItems: LocationModel[] = [];
  @Output() selected: EventEmitter<LocationModel[]> = new EventEmitter();

  selectionModel: SelectionModel = {};

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(item: LocationModel): void {
    const key = item.locationId;
    this.selectionModel[key] = !this.selectionModel[key];
    this.selected.emit(
      this.locationItems.filter((item: LocationModel) => this.selectionModel[item.locationId])
    );
  }
}
