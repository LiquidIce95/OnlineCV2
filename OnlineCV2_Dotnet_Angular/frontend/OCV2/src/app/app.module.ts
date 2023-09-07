import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';
import { DotSimulationComponent } from './dot-simulation/dot-simulation.component';
import { FreelancingComponent } from './freelancing/freelancing.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LinksComponent,
    DotSimulationComponent,
    FreelancingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
