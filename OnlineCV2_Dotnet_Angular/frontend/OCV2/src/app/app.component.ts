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
  showCV_body : boolean = false;

  // Called when the mouse is over the h1
  show_MenuIcon() {
    this.showMenuIcon = true;
  }

  // Called when the mouse leaves the h1
  hide_MenuIcon() {
    setTimeout(() => {
      if(!this.showCV_body){
        this.showMenuIcon = false;
        this.showCV_body = false;
      }
      
    }, 3000); 
  }

  show_hide_CV_body(){
    if(!this.showCV_body){
      this.showCV_body = true;
    }
    else{
      this.showCV_body = false;
      this.showMenuIcon = false;
    }
  }

}
