import { Component } from '@angular/core';
import { VisibilityService } from './visibility-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VisibilityService],  // Add this line
  animations: [
    trigger('growShrink', [
      state('void', style({ 
        height: '0', 
        width: '0',  // Added width
        opacity: '0', 
        overflow: 'hidden' 
      })),
      state('*', style({ 
        height: '*', 
        width: '*',  // Added width
        opacity: '1', 
        overflow: 'hidden' 
      })),
      transition('void <=> *', animate('0.5s ease-in-out')),
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]

})
export class AppComponent {

  title = "OCV";

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
