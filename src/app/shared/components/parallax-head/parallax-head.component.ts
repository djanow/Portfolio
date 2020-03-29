import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-parallax-head',
  templateUrl: './parallax-head.component.html',
  styleUrls: ['./parallax-head.component.scss']
})
export class ParallaxHeadComponent implements OnInit {
  @Input() imagesParallax = "../../../../assets/images/parallax/marseille.jpg"; 
  @Input() paddingPercent = "30"; 

  constructor() { }

  ngOnInit() {
    this.parallaxInit();
    console.log(this.imagesParallax);
    
  }
  parallaxInit() {
    $(document).ready(function () {
      var $window = $(window);
      $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));

          // Put together our final background position
          var coords = '50% ' + yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
        });
      });
    });
  }

}
