import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  isTrue = false;
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.isTrue.subscribe((f) => (this.isTrue = true));
  }
}
