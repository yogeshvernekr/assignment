import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: [
    '../adduser/adduser.component.css',
    './userdetails.component.css',
  ],
})
export class UserdetailsComponent {
  @ViewChild('closebutton') closebutton: ElementRef;
  @ViewChild('username') name: ElementRef;
  @ViewChild('usernumber') number: ElementRef;

  @ViewChild('useraddress') address: ElementRef;

  user: { name: string; number: number; address: string } | undefined;

  constructor(
    private getUserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const name = this.route.snapshot.params['name'];
    // this.user = this.getUserService.getUser(name);
    this.route.params.subscribe((params) => {
      this.user = this.getUserService.getUser(params['name']);
    });
  }
  delete() {
    this.getUserService.deleteUser(this.user?.name);
  }

  edit(f: NgForm) {
    f.form.setValue({
      name: this.user?.name,
      number: this.user?.number,
      address: this.user?.address,
    });
  }

  onEdit(f: NgForm) {
    this.getUserService.editUser(
      this.user!.name,
      f.form.value.name,
      f.form.value.number,
      f.form.value.address
    );
    this.closebutton?.nativeElement.click();
    this.router.navigate(['/', 'users', f.form.value.name]);
  }
}
