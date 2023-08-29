import { Component, Renderer2, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title_fontsize = 10;
  title_bottom = 80;
  inSquare = false;
  titleon = false;
  inIcon = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // title for the  Online CV
    const title = this.renderer.createElement('div');
    this.renderer.setProperty(title, 'innerHTML', 'Curriculum Vitae');
    this.renderer.addClass(title, 'title');
    this.renderer.appendChild(document.body, title);
    this.renderer.setStyle(title, 'bottom', `${this.title_bottom}vh`);
    this.renderer.setStyle(title, 'fontSize', `${this.title_fontsize}vh`);
    
    // icon which can be clickd to show CV body
    const icon = this.renderer.createElement('div');
    this.renderer.addClass(icon, 'icon');
    this.renderer.setProperty(icon, 'innerHTML', '&#9776;');
    this.renderer.appendChild(document.body, icon);
    this.renderer.setStyle(icon, 'bottom', `${this.title_bottom -10}vh`);


    // background of the CV body
    const rectangle = this.renderer.createElement('div');
    this.renderer.addClass(rectangle, 'rectangle');
    this.renderer.appendChild(document.body, rectangle);
    this.renderer.setStyle(rectangle, 'bottom', `${this.title_bottom - 10 }vh`);


    this.sizer(icon, rectangle);

    this.renderer.listen(window, 'load', () => this.sizer(icon, rectangle));
    this.renderer.listen(window, 'resize', () => this.sizer(icon, rectangle));
    this.renderer.listen(icon, 'click', () => this.toggleSquare(rectangle, icon));
    this.renderer.listen(title, 'mouseover', () => this.titleMouseOver(title, icon));
    this.renderer.listen(icon, 'mouseover', () => this.inIcon = true);
    this.renderer.listen(icon, 'mouseout', () => this.iconMouseOut(icon));
    this.renderer.listen(title, 'mouseout', () => this.titleMouseOut(title, icon));
  }

  /*positons the rectangle correctly*/
  sizer(icon: any, rectangle: any) {
    this.renderer.setStyle(rectangle, 'bottom', `${this.title_bottom -25}vh`);
  }

  // enabling or disabling the cv body rectangle by clicking
  toggleSquare(rectangle: any, icon: any) {
    if (!this.inSquare) {
      this.renderer.setStyle(rectangle, 'display', 'block');
      this.inSquare = true;
      icon.style.transform = 'translateX(-50%) rotate(90deg)'; // Translate and rotate
    } else {
      this.renderer.setStyle(rectangle, 'display', 'none');
      this.inSquare = false;
      icon.style.transform = 'translateX(-50%) rotate(0deg)'; // Translate and rotate
    }
  }

  titleMouseOver(title: any, icon: any) {
    this.renderer.setStyle(title, 'color', 'grey');
    this.renderer.setStyle(icon, 'opacity', '1');
    this.titleon = true;
  }

  iconMouseOut(icon: any) {
    this.inIcon = false;
    setTimeout(() => {
      if (!this.inSquare && !this.titleon && !this.inIcon) {
        this.renderer.setStyle(icon, 'opacity', '0');
      }
    }, 2000);
  }

  titleMouseOut(title: any, icon: any) {
    this.renderer.setStyle(title, 'color', 'white');
    this.titleon = false;
    setTimeout(() => {
      if (!this.inSquare && !this.titleon && !this.inIcon) {
        this.renderer.setStyle(icon, 'opacity', '0');
      }
    }, 2000);
  }
}
