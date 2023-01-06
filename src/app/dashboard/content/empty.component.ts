import { Component } from '@angular/core';

@Component({
  selector: 'empty-content',
  template: `
    <div class="notfound">
      <img
        class="center"
        src="../../../assets/img/notfound.png"
        width="400"
        height="400"
      />
    </div>
  `,
  styleUrls: ['./content.component.css'],
})
export class EmptyComponent {}
