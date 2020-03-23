import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

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

}
