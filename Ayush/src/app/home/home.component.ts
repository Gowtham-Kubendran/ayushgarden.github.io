import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
items:any;
  constructor() { }

  ngOnInit() {
    this.items=[
      {
        name:"Integrated Farming",
        imgsrc:"../../assets/images/harvest.svg",
        desc:" It refers to agricultural systems that integrate livestock and crop production and may sometimes be known as Integrated Bio systems."
      },
      {
        name:"Integrated Treatment",
        imgsrc:"../../assets/images/hospital.svg",
        desc:"Various types of treatments like Acupuncture , Ayurveda , Homeopathy , Alopathy are available."
      },
      {
        name:"Old Age Home",
        imgsrc:"../../assets/images/old.svg",
        desc:"multi-residence housing facility situated at the centre of farm lands intended for the elderly people."
      },
      {
        name:"Day Care",
        imgsrc:"../../assets/images/daycare.svg",
        desc:"Planned program of activities designed to promote well-being though social and health-related services"
      },
      {
        name:"Nursing Care",
        imgsrc:"../../assets/images/nurse.svg",
        desc:"Nurses to be able to perform traditional nursing duties, yet they also have special training that helps them better understand the special needs of many elderly people."
      },
      {
        name:"Other Amenities",
        imgsrc:"../../assets/images/amenities.svg",
        desc:"Transport , CCTV , Swimming pool , resturants are available inside the campus."
      }
    ];
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
