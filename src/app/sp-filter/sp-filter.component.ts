import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sp-filter',
  templateUrl: './sp-filter.component.html',
  styleUrls: ['./sp-filter.component.css']
})
export class SpFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<string>();
  filterInputCtl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.filterInputCtl.valueChanges
      .pipe(
        debounceTime(400)
      )
    .subscribe((data: string) => this.filter.emit(data));
  }

  onRefresh(): void {
    this.filter.emit(this.filterInputCtl.value);
  }
}
