import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() clickedFeature = new EventEmitter<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.clickedFeature.emit(feature);
  }
}
