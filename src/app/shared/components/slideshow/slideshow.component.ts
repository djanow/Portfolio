import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  imageUrlArray = [
    {
      url: 'assets/images/dessin/charlychaplin.jpg',
      caption: 'Charly Chaplin Great speech'
    },
    {
      url: 'assets/images/dessin/winstonchurchill.jpg',
      caption: 'Winston Churchill Quote'
    },
    {
      url: 'assets/images/dessin/rootheart.jpg',
      caption: 'Root Heart'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
