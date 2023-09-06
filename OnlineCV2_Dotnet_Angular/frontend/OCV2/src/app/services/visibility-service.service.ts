import { Injectable,ElementRef, Renderer2 } from '@angular/core';

@Injectable()
export class VisibilityService {
  showMenuIcon: boolean = false;
  showCV_body: boolean = false;
  // assume we wont have more than 10 images per component
  showImgs: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  overlay:boolean = false;

  private el: ElementRef | null = null;
  private renderer: Renderer2 | null = null;

  private scrollX: number = 0;
  private scrollY: number = 0;

  storeScrollPosition(): void {
    this.scrollX = window.scrollX;
    this.scrollY = window.scrollY;
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

      window.scrollTo({
        top: this.scrollY,
        left: this.scrollX,
        behavior: 'smooth' // optional
      });

    }
    else{
      this.showImgs[img] = true;
      this.overlay = true;
      this.storeScrollPosition();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // optional
      });
    }
    if (this.el && this.renderer){
      const overlayElement = this.el.nativeElement.querySelector('.overlay');
      this.renderer.setStyle(overlayElement, 'heigth', '100vh');

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
