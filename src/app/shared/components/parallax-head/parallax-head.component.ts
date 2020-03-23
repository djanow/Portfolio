import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-parallax-head',
  templateUrl: './parallax-head.component.html',
  styleUrls: ['./parallax-head.component.scss']
})
export class ParallaxHeadComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.parallaxInit();
    new Typewriter('#typewriter', {
      strings: ['Angular 9', 'Node', 'Bootstrap 4', 'D3', 'Sass'],
      loop: true,
      autoStart: true,
    });
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
