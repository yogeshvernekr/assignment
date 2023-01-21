
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-carousel',
  template: `<swiper
    [slidesPerView]="'auto'"
    [centeredSlides]="true"
    [loop]="true"
    [spaceBetween]="20"
    [pagination]="{
      clickable: true
    }"
    [navigation]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide><img src="./assets/03.png" alt=""></ng-template
    ><ng-template swiperSlide><img src="./assets/glamihr-2-scaled.png" alt=""></ng-template
    ><ng-template swiperSlide><img src="./assets/optique-sonnet-home-background.png" alt=""></ng-template
    >
  </swiper>`,
  styleUrls: ["./carousel.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {}
