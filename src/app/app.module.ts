import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ParallaxHeadComponent } from './shared/components/parallax-head/parallax-head.component';
import { SkillsComponent } from './shared/components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ParallaxHeadComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
