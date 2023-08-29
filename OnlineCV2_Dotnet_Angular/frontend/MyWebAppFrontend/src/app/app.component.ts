import { Component, Renderer2, AfterViewInit } from '@angular/core';
import {body} from './cvbody'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})  
export class AppComponent implements AfterViewInit {
  title_fontsize : number = 10;
  title_bottom : number= 80;
  inSquare : boolean= false;
  titleon : boolean= false;
  inIcon : boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // title for the  Online CV
    const title : HTMLElement = this.renderer.createElement('title');
    this.renderer.setProperty(title, 'innerHTML', 'Curriculum Vitae');
    this.renderer.addClass(title, 'title');
    this.renderer.appendChild(document.body, title);
    this.renderer.setStyle(title, 'bottom', `${this.title_bottom}vh`);
    this.renderer.setStyle(title, 'fontSize', `${this.title_fontsize}vh`);
    
    // icon which can be clickd to show CV body
    const icon : HTMLElement = this.renderer.createElement('title_icon');
    this.renderer.setProperty(icon, 'innerHTML', '&#9776;');
    this.renderer.addClass(icon, 'icon');
    this.renderer.appendChild(document.body, icon);
    this.renderer.setStyle(icon, 'bottom', `${this.title_bottom -10}vh`);


    // background of the CV body, TODO: replace this with the CV_body object
    const CV_body : HTMLElement = body(this,document);

    this.sizer(icon, CV_body);

    window.addEventListener('load',() => this.sizer(icon, CV_body));
    window.addEventListener('resize', () => this.sizer(icon,CV_body));
    icon.addEventListener('click',()=> this.toggleSquare(CV_body,icon));
    title.addEventListener('mouseover',()=> this.titleMouseOver(title,icon));
    icon.addEventListener('mouseover', () => (this.inIcon = true));
    icon.addEventListener('mouseout', () => this.iconMouseOut(icon));
    title.addEventListener('mouseout', () => this.titleMouseOut(title, icon));

  }

  /*positons the CV_body correctly*/
  sizer(icon: HTMLElement, CV_body: HTMLElement) {
    this.renderer.setStyle(CV_body, 'bottom', `${this.title_bottom -25}vh`);
  }

  // enabling or disabling the cv body CV_body by clicking
  toggleSquare(CV_body: HTMLElement, icon: HTMLElement) {
    if (!this.inSquare) {
      this.renderer.setStyle(CV_body, 'display', 'block'); 
      //CV_body.setStyle('display','none');
      this.inSquare = true;
      icon.style.transform = 'translateX(-50%) rotate(90deg)'; // Translate and rotate
    } else {
      this.renderer.setStyle(CV_body, 'display', 'none'); 
      //CV_body.setStyle('display','none');
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
