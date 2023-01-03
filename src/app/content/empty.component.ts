import { Component } from '@angular/core';

@Component({
  selector: 'empty-content',
  template: `
    <img
      class="center"
      src="../../../assets/img/notfound.png"
      width="400"
      height="600"
    />
  `,
  styleUrls: ['./content.component.css'],
})
export class EmptyComponent {}
