import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCV2';


  // This property will determine if the icon should be displayed or not.
  showMenuIcon: boolean = false;
  showRect : boolean = false;

  // Called when the mouse is over the h1
  onHover() {
    this.showMenuIcon = true;
  }

  // Called when the mouse leaves the h1
  onLeave() {
    setTimeout(() => {
      this.showMenuIcon = false;
    }, 2000); // Hide the icon after 2 seconds (2000 milliseconds)
  }
}
