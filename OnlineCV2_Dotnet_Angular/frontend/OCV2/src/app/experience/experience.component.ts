import { Component } from '@angular/core';
import { VisibilityService } from '../visibility-service.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [VisibilityService]  // Add this line

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
