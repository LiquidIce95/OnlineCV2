import { Injectable } from '@angular/core';

@Injectable()
export class VisibilityService {
  showMenuIcon: boolean = false;
  showCV_body: boolean = false;

  show_MenuIcon() {
    this.showMenuIcon = true;
  }

  hide_MenuIcon() {
    setTimeout(() => {
      if (!this.showCV_body) {
        this.showMenuIcon = false;
        this.showCV_body = false;
      }
    }, 3000);
  }

  show_hide_CV_body() {
    if (!this.showCV_body) {
      this.showCV_body = true;
    }
    else {
      this.showCV_body = false;
      this.showMenuIcon = false;
    }
  }

}
