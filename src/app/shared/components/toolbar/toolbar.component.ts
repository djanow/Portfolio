import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private vps: ViewportScroller) { }
  nav = {
    home: false,
    skills: false,
    contact: false
  }
  ngOnInit() {

    //menu transition js
    $(document).ready(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $(".navbar").addClass("navbar-scroll");
        }
        else {
          $(".navbar").removeClass("navbar-scroll");
        }
        if (scroll > 200) {
          $(".navbar").addClass("bg-primary");
        }

        else {
          $(".navbar").removeClass("bg-primary");
        }
      })
    })
  }
  scroll(anchor) {
    this.vps.scrollToAnchor(anchor)
    this.nav = {
      home: false,
      skills: false,
      contact: false
    }
    this.nav[anchor] = true;

  }
}
