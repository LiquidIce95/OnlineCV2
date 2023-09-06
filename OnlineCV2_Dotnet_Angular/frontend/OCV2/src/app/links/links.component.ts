import { Component } from '@angular/core';
import { VisibilityService } from '../services/visibility-service.service';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [VisibilityService],  // Add this line
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
export class LinksComponent {
  constructor(public visibilityService: VisibilityService) {}

  
}
