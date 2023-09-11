import { Injectable,ElementRef, Renderer2 } from '@angular/core';

@Injectable()
export class VisibilityService {
  showMenuIcon: boolean = false;
  showCV_body: boolean = false;
  // assume we wont have more than 10 images per component
  showImgs: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  overlay:boolean = false;

  private renderer: Renderer2 | null = null;

  constructor(renderer: Renderer2| null) { 
    this.renderer = renderer;
  }
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

  showImage(img: number) {
    if(this.showImgs[img] == true){
      this.showImgs[img] = false;
      this.overlay = false;
      if(this.renderer){
        this.renderer.removeStyle(document.body, 'overflow');
      }
    }
    else{
      this.showImgs[img] = true;
      this.overlay = true;
      if(this.renderer){
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      }

    }
  }

  scrollUp(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // optional
    });
  }

  scrollDown(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  

}
