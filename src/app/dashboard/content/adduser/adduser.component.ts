import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService, user } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements AfterViewInit, OnDestroy, AfterViewInit {

  public users: any;
  @ViewChild('closebutton') closebutton: ElementRef;
  defaultX: any;
  defaultY: any;
  childx: number;
  childy: number;
  defaultBottom: any;
  defaultRight: any;
  childbottom: any;
  childright: any;
  defaultHeight: any;

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'white';
    // this.registerDragElement();

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

  reposition(){
    
  }

  getOffset(el) {
    const rect = el.getBoundingClientRect();
    
    return {
      left: rect.left ,
      top: rect.top ,
      bottom: rect.bottom,
      right: rect.right,
      height: rect.height,
      width: rect.width,


    };
  }


 registerDragElement() {
    const elmnt = document.getElementById('mydiv');
    const elmnt2 = document.getElementById('picture-container');

     this.defaultX =this.getOffset(elmnt2).left
     this.defaultY =this.getOffset(elmnt2).top
     this.defaultBottom = this.getOffset(elmnt2).bottom
     this.defaultRight = this.getOffset(elmnt2).right
     this.defaultHeight = this.getOffset(elmnt2).height



    


    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:;
      this.childx = this.getOffset(elmnt).left;
      this.childy = this.getOffset(elmnt).top;
      this.childbottom = this.getOffset(elmnt).bottom;
      this.childright = this.getOffset(elmnt).right;
      let y1 = this.getOffset(elmnt2).height;
      let y2 = this.getOffset(elmnt).height;
      let x1 = this.getOffset(elmnt2).width;
      let x2 = this.getOffset(elmnt).width;


      if(this.childx <= this.defaultX){
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }else{
        elmnt.style.left = 0 + 'px'
      }

      if(this.childy <= this.defaultY){
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';

      }else{
        elmnt.style.top = 0 + 'px';
      }

      if(this.childbottom >= this.defaultBottom){
       
        
      }else{
        elmnt.style.top = y1-y2 + 'px';

      }

      if(this.childright <= this.defaultRight){
        console.log(x1-x2 );
        
        elmnt.style.left = x1 - x2 + 'px';
        console.log(this.childright);
        
      }


      // this.childy <= this.defaultY
    
    };

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };

    if (document.getElementById(elmnt.id + 'header')) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  }
  
  public allowDrop(ev): void {
    ev.preventDefault();
  }
  
  public drag(ev): void {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  public drop(ev): void {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
