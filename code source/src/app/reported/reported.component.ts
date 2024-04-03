import { Component } from '@angular/core';

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrl: './reported.component.css'
})
export class ReportedComponent {
  reported:any[]=[
    {
      name:"Najla BenAhmed  ",
      image:  "../../assets/images (2).jpg",
    },
    {
      name:"Benmoussa Heithem",
      image:"../../assets/347245498_3570899629797993_7265237523852668848_n.jpg",
    },
    {
      name:"Mezni noor",
      image:"../../assets/1700506697307.jpg",
    },
    {
      name:"Lucas Martinez",
      image:"../../assets/homme.jpg",
    },
    {
      name:"Liam Brown",
      image:"../../assets/homme2.jpg",
    },
    {
      name:"Ava Miller",
      image:"../../assets/images.jpg",
    }
  ]


}






