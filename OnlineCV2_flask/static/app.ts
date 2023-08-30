import { body } from './cvbody';
import { Icon_button } from './util';

const title_fontsize: number = 10;
const title_bottom: number = 80;

// Create a title for the Online CV
const title: HTMLElement = document.createElement('CV title');
title.textContent = 'Curriculum Vitae';
title.classList.add('title');
title.style.bottom = `${title_bottom}vh`;
title.style.fontSize = `${title_fontsize}vh`;
document.body.appendChild(title);

const CV_body: HTMLElement = body(document, window);

const CV_Head: Icon_button = new Icon_button(title, CV_body, document, window, 'grey', 'white');
