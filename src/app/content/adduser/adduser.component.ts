import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent {
  public users: { name: string; number: number; address: string }[] = [];
  @ViewChild('closebutton') closebutton: ElementRef | undefined;

  constructor(private getUser: UserService) {}

  ngOnInit() {
    this.users = this.getUser.getUsers();
  }

  onSubmit(data: NgForm) {
    console.log(data.form.value);
    this.getUser.updateUser(
      data.form.value.name,
      data.form.value.number,
      data.form.value.address
    );
    this.closebutton?.nativeElement.click();
  }
}
