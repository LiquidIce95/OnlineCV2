
//returns the CV body as an htmlobjects with alle chidlren and
// Eventlisteners to the chidlren
function body(AppComponent: any, document : any) : HTMLElement{
    // background of the CV body, TODO: replace this with the CV_body object
    const CV_body : HTMLElement= AppComponent.renderer.createElement('div');
    AppComponent.renderer.addClass(CV_body, 'CV_body');
    AppComponent.renderer.appendChild(document.body, CV_body);
    AppComponent.renderer.setStyle(CV_body, 'bottom', `${AppComponent.title_bottom - 10 }vh`);


    const text_pers_info : HTMLElement = AppComponent.renderer.createElement('div');
    AppComponent.renderer.addClass(text_pers_info, 'CV_body_text_fields');
    AppComponent.renderer.setProperty(text_pers_info,'innerHTML','Personal Information');



    CV_body.appendChild(text_pers_info);



    return CV_body;
}


export {
    body
}


