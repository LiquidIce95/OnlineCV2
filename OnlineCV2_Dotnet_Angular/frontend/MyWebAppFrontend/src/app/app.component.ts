import { Component, Renderer2, AfterViewInit } from '@angular/core';
import {body} from './cvbody'
import { Icon_button } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})  
export class AppComponent implements AfterViewInit {
  title_fontsize : number = 10;
  title_bottom : number = 80;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // title for the  Online CV 
    const title : HTMLElement = this.renderer.createElement('title');
    this.renderer.setProperty(title, 'innerHTML', 'Curriculum Vitae');
    this.renderer.addClass(title, 'title');
    this.renderer.appendChild(document.body, title);
    this.renderer.setStyle(title, 'bottom', `${this.title_bottom}vh`);
    this.renderer.setStyle(title, 'fontSize', `${this.title_fontsize}vh`);

    // background of the CV body, TODO: replace this with the CV_body object
    const CV_body : HTMLElement = body(this,document);

    const CV_Head = new Icon_button(title,CV_body,this,document,window,'grey','white');


  }

}
