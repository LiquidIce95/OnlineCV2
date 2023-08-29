
//reutrns the personal information section of the CV
function Pers_Inf(AppComponent : any, document : any): HTMLElement{
    const Pers_Inf_Body : HTMLElement = AppComponent.renderer.createElement('div');
    AppComponent.renderer.addClass(Pers_Inf_Body, 'CV_body_text_fields');
    AppComponent.renderer.setProperty(Pers_Inf_Body,'innerHTML','Personal Information');
    


    return Pers_Inf_Body;

}

//returns the experience section of the CV
function Expe(AppComponent : any, document : any): HTMLElement{
    const Expe_body : HTMLElement = AppComponent.renderer.createElement('Experience');



    return Expe_body;

}

//returns the education section of the CV
function Edu(AppComponent : any, document : any): HTMLElement{
    const Edu_body : HTMLElement = AppComponent.renderer.createElement('Education');



    return Edu_body;

}

//returns the skills section of the CV
function skills(AppComponent : any, document : any): HTMLElement{
    const skills_body : HTMLElement = AppComponent.renderer.createElement('Skills');



    return skills_body;

}


//returns the CV body as an htmlobjects with alle chidlren and
// Eventlisteners to the chidlren
// INVATIANT: append children in vertical or horizontal rendering order
function body(AppComponent: any, document : any) : HTMLElement{
    // background of the CV body, TODO: replace this with the CV_body object
    const CV_body : HTMLElement = AppComponent.renderer.createElement('CV_Body');
    AppComponent.renderer.addClass(CV_body, 'CV_body');
    AppComponent.renderer.appendChild(document.body, CV_body);
    AppComponent.renderer.setStyle(CV_body, 'bottom', `${AppComponent.title_bottom - 20 }vh`);

    const pers_inf : HTMLElement = Pers_Inf(AppComponent,document);
    const exp : HTMLElement = Pers_Inf(AppComponent,document);
    const edu : HTMLElement = Pers_Inf(AppComponent,document);
    const skills : HTMLElement = Pers_Inf(AppComponent,document); 

    CV_body.appendChild(pers_inf);
    CV_body.appendChild(exp);
    CV_body.appendChild(edu);
    CV_body.appendChild(skills);

    return CV_body;
}


export {
    body
}


