import { Component } from '@angular/core';
import { VisibilityService } from '../services/visibility-service.service';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['../global-styles.css','./personal-information.component.css'],
  providers: [VisibilityService],  
  animations: [
    trigger('growShrink', [
      state('void', style({ 
        height: '0', 
        width: '0',  
        opacity: '0', 
      })),
      
      transition('void => *', [
        sequence([
          animate('0.5s ease-in-out', style({ height: '*', width: '*', opacity: '0' })),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ])
      ]), 
      transition('* => void', [
        sequence([
          animate('0.5s ease-in-out', style({ opacity: '0' })),
          animate('0.5s ease-in-out', style({ height: '0', width: '0', opacity: '0' })),
        ])
      ]), 
    ])
    
  ]

})
export class PersonalInformationComponent {

  constructor(public visibilityService: VisibilityService) {}

}
