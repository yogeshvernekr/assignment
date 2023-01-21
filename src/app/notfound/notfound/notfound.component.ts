import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // document.body.style.backgroundColor = '#081421';

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 5000);
  }
}
