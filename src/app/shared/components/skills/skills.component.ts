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
      content: `using last version of angular and all is tool like: RxJs, Animation, Directive, Component, Pipe, Angular-cli...`,
      image: 'assets/images/skills/angular.svg'
    },
    {
      title: "Node",
      content: `last version of node in typescript with express for back-end services`,
      image: 'https://storage.semalt.com/uploads/articles/6e222187f3ca196b689b9d3984685dc91.png'
    },
    {
      title: "Sass",
      content: `Use for style with mixin function loops...`,
      image: 'assets/images/skills/sass.jpg'
    },
    {
      title: "D3",
      content: `using D3`,
      image: 'https://www.blogduwebdesign.com/wp-content/uploads/2019/02/logo-sass_m.jpg'
    },
    {
      title: "D3",
      content: `using D3`,
      image: 'https://www.blogduwebdesign.com/wp-content/uploads/2019/02/logo-sass_m.jpg'
    },
    {
      title: "D3",
      content: `using D3`,
      image: 'https://www.blogduwebdesign.com/wp-content/uploads/2019/02/logo-sass_m.jpg'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
