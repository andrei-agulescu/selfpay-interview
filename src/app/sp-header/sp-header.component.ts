import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sp-header',
  templateUrl: './sp-header.component.html',
  styleUrls: ['./sp-header.component.css']
})
export class SpHeaderComponent {
  @Output() save = new EventEmitter<any>();

  constructor() { }

  onSave(): void {
    this.save.emit();
  }
}
