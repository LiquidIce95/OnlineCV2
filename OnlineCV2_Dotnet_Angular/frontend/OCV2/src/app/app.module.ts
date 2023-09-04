import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';
import { DotSimulationComponent } from './dot-simulation/dot-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LinksComponent,
    DotSimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
