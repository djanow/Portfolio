import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public listSkills = [
    {
      title: "Angular 9",
      content: `Using last version of angular and all its tools like: RxJs, Animation, Directive, Component, Pipe, Angular-cli...`,
      image: 'assets/images/skills/angular.svg'
    },
    {
      title: "Node",
      content: `Last version of node in typescript with express for back-end services`,
      image: 'https://storage.semalt.com/uploads/articles/6e222187f3ca196b689b9d3984685dc91.png'
    },
    {
      title: "Sass",
      content: `Use for style with mixin function loops...`,
      image: 'assets/images/skills/sass.jpg'
    },
    {
      title: "D3",
      content: `Using D3 to make all kinds of charts: multiple lines chart, donut, bar chart etc.`,
      image: 'assets/images/skills/D3.png'
    },
    {
      title: "Bootstrap 4",
      content: `Using Bootstrap 4 for Responsive Design: Flexbox, col and other class`,
      image: 'assets/images/skills/bootstrap.png'
    },
    {
      title: "HTML5",
      content: `Using all last features of html5`,
      image: 'assets/images/skills/html5.svg'
    },
    {
      title: "Git",
      content: `Using Git for versioning`,
      image: 'assets/images/skills/git.png'
    },
    {
      title: "Protractor",
      content: `Using protractor for end to end test`,
      image: 'assets/images/skills/protractor.svg'
    },
    {
      title: "OpenCV",
      content: `Using OpenCV for image Analysis`,
      image: 'assets/images/skills/opencv.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }
}
