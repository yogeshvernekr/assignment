import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService, user } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements AfterViewInit, OnDestroy{
  public users: any;
  @ViewChild('closebutton') closebutton: ElementRef;

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'white';
}

ngOnDestroy(): void {
  this.elementRef.nativeElement.ownerDocument
  .body.style.backgroundColor = '#303030';
}


  ngOnInit() {
    // this.users = this.getUser.getUsers();
    // this.route.data.subscribe((user) => {
    //   this.users = user;
    // });

    this.route.data.subscribe((data: any) => {
      let users = data.users;
      this.UserService.retrieveUsers(users);
    });
    this.users = this.UserService.getUsers();
  }

  onSubmit(data: NgForm) {
    console.log(data.controls['number'].value);
    this.UserService.addUser(
      data.form.value.name,
      data.form.value.number,
      data.form.value.address
    );
    data.resetForm();
    // console.log(data.form.value);
    this.closebutton?.nativeElement.click();
  }
}
