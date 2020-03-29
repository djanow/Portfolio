import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ParallaxHeadComponent } from './shared/components/parallax-head/parallax-head.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ParallaxHeadComponent,
    SkillsComponent,
    SlideshowComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
