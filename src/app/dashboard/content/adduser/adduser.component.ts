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
  @ViewChild('closebutton') closebutton: ElementRef;

  constructor(private getUser: UserService) {}

  ngOnInit() {
    this.users = this.getUser.getUsers();
  }

  onSubmit(data: NgForm) {
    console.log(data.controls['number'].value);
    this.getUser.updateUser(
      data.controls['name'].value,
      data.control.value.number,
      data.control.value.address
    );
    data.resetForm();
    // console.log(data.form.value);
    this.closebutton?.nativeElement.click();
  }
}
