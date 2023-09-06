import { Component } from '@angular/core';
import { VisibilityService } from './services/visibility-service.service';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';
import { ImagePreloadService } from './services/image-preload-service.service';  // Import your service


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

  constructor(public visibilityService: VisibilityService,private imagePreloadService: ImagePreloadService) {}

  ngOnInit(): void {  // Add this lifecycle hook
    this.imagePreloadService.preloadImages();  // Call the preload function
  }
  

}
