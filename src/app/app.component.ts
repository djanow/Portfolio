import { Component, OnInit } from '@angular/core';

import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  
  ngOnInit(): void {
    new Typewriter('#typewriter', {
      strings: ['Angular 9', 'Node', 'Bootstrap 4', 'D3', 'Sass', 'Responsive Design'],
      loop: true,
      autoStart: true,
    });
  }

}
