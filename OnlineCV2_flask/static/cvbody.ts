import { Icon_button } from "./util";

function Pers_Inf(document: Document, window: Window): Icon_button {
    const Pers_Inf_title: HTMLElement = document.createElement('div');
    Pers_Inf_title.classList.add('CV_body_text_fields');
    Pers_Inf_title.innerHTML = 'Personal Information';
    
    const Pers_Inf_body: HTMLElement = document.createElement('div');
    Pers_Inf_body.classList.add('CV_body_text_fields');
    Pers_Inf_body.innerHTML = 'blabla';

    const Pers_Inf_head: Icon_button = new Icon_button(Pers_Inf_title, Pers_Inf_body, document, window,'grey', 'white');
    return Pers_Inf_head;
}

function Expe(document: Document): HTMLElement {
    const Expe_body: HTMLElement = document.createElement('div'); // changed from 'Experience' to 'div'
    return Expe_body;
}

function Edu(document: Document): HTMLElement {
    const Edu_body: HTMLElement = document.createElement('div'); // changed from 'Education' to 'div'
    return Edu_body;
}

function Skills(document: Document): HTMLElement {
    const skills_body: HTMLElement = document.createElement('div'); // changed from 'Skills' to 'div'
    return skills_body;
}

function body(document: Document, window: Window): HTMLElement {
    const CV_body: HTMLElement = document.createElement('div'); // changed from 'CV_Body' to 'div'
    CV_body.classList.add('CV_body');
    document.body.appendChild(CV_body);

    // You might want to set the 'bottom' style for CV_body. 
    // You previously used `AppComponent.title_bottom`, but now that we don't have AppComponent, you'd need another way to set this value.
    // For the sake of this example, I'm setting it to 60vh. Modify it accordingly.
    CV_body.style.bottom = '60vh';

    const pers_inf: Icon_button = Pers_Inf(document, window);
    CV_body.appendChild(pers_inf.Parent); // added parent
    CV_body.appendChild(pers_inf.Child); // added child
    
    // Uncomment the following as needed
    // const exp: HTMLElement = Expe(document);
    // const edu: HTMLElement = Edu(document);
    // const skills: HTMLElement = Skills(document); 

    // CV_body.appendChild(exp);
    // CV_body.appendChild(edu);
    // CV_body.appendChild(skills);

    return CV_body;
}

export {
    body,
    Pers_Inf,
    Edu,
    Expe,
    Skills
};
