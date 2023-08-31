import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  
  // BehaviorSubject to manage visibility state
  private showMenuIconSubject = new BehaviorSubject<boolean>(false);
  showMenuIcon$ = this.showMenuIconSubject.asObservable();

  private showCVBodySubject = new BehaviorSubject<boolean>(false);
  showCVBody$ = this.showCVBodySubject.asObservable();

  constructor() { }

  toggleMenuIcon() {
    this.showMenuIconSubject.next(!this.showMenuIconSubject.value);
  }

  toggleCVBody() {
    this.showCVBodySubject.next(!this.showCVBodySubject.value);
  }

  // Add more methods to handle other toggles if necessary
  
}
