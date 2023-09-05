import { Component } from '@angular/core';
import { VisibilityService } from '../visibility-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [VisibilityService],  // Add this line
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]

})
export class ExperienceComponent {
  constructor(public visibilityService: VisibilityService) {}

  // You can now use the service methods like this:
  show_MenuIcon() {
    this.visibilityService.show_MenuIcon();
  }

  hide_MenuIcon(){
    this.visibilityService.hide_MenuIcon();
  }
  
  show_hide_CVbody(){
    this.visibilityService.show_hide_CV_body();
  }
}
