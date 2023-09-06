import { Component } from '@angular/core';
import { VisibilityService } from '../visibility-service.service';
import { trigger, state, style, animate, transition,sequence } from '@angular/animations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [VisibilityService],
  animations: [
    trigger('growShrink', [
      state('void', style({ 
        height: '0', 
        width: '0',  // Added width
        opacity: '0', 
        overflow: 'hidden' 
      })),
      
      transition('void => *', [
        sequence([
          animate('0.5s ease-in-out', style({ height: '*', width: '*', opacity: '0', overflow: 'hidden' })),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ])
      ]), 
      transition('* => void', [
        sequence([
          animate('0.5s ease-in-out', style({ opacity: '0' })),
          animate('0.5s ease-in-out', style({ height: '0', width: '0', opacity: '0', overflow: 'hidden' })),
        ])
      ]), 
    ])
    
  ]

})
export class EducationComponent {
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
