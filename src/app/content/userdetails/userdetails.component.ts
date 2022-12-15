import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent {
  user: { name: string; number: number; address: string } | undefined;

  constructor(
    private getUserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.user = this.getUserService.getUser('name');
    this.route.params.subscribe((params) => {
      this.user = this.getUserService.getUser(params['name']);
    });
  }
}
